/* ============================================================
   CALI — Hero FX
   1) Prana: luminous sparks rising in an ascending spiral
   2) Mouse gravity on the CALI · Movimiento lockup
   ============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     1) PRANA PARTICLES
     --------------------------------------------------------- */
  var canvas = document.getElementById("prana");
  var hero = document.getElementById("hero");
  if (canvas && hero) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    var particles = [];

    // warm-forward palette with iris accents (luminous on cream)
    var PALETTE = [
      [255, 122, 46],  // orange (signature)
      [255, 122, 46],
      [232, 188, 99],  // gold
      [255, 168, 92],  // amber
      [251, 176, 215], // pink
      [102, 207, 190], // aqua
      [111, 194, 220], // blue
      [195, 174, 201], // lilac
    ];

    function resize() {
      var r = hero.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeParticle(initial) {
      var col = PALETTE[(Math.random() * PALETTE.length) | 0];
      return {
        baseX: Math.random() * W,
        y: initial ? Math.random() * H : H + Math.random() * 40,
        // rise speed (px per second) — slow, floating ascent
        vy: 8 + Math.random() * 16,
        // spiral sway
        amp: 10 + Math.random() * 46,
        ampGrow: 0.15 + Math.random() * 0.5,   // spiral widens as it climbs
        freq: 0.28 + Math.random() * 0.7,       // turns per second (gentler)
        phase: Math.random() * Math.PI * 2,
        // appearance
        size: 1.0 + Math.random() * 2.3,
        col: col,
        // twinkle
        twPhase: Math.random() * Math.PI * 2,
        twFreq: 0.7 + Math.random() * 1.7,
        baseAlpha: 0.5 + Math.random() * 0.5,
        star: Math.random() < 0.22,             // some are 4-point sparks
        age: 0,
        life: 9 + Math.random() * 9,            // seconds before recycle
      };
    }

    function reset(p) {
      var np = makeParticle(false);
      for (var k in np) p[k] = np[k];
    }

    function spawn() {
      particles = [];
      var area = W * H;
      var count = Math.max(30, Math.min(84, Math.round(area / 18000)));
      for (var i = 0; i < count; i++) particles.push(makeParticle(true));
    }

    function draw(p) {
      var t = p.age;
      var climb = 1 - p.y / (H + 1);                 // 0 at bottom → 1 at top
      var amp = p.amp * (1 + p.ampGrow * climb);     // widening spiral
      var x = p.baseX + Math.sin(p.phase + t * p.freq * Math.PI * 2) * amp;

      // fade in at birth, fade out near top + end of life
      var fadeIn = Math.min(1, t * 1.4);
      var fadeOut = Math.min(1, (p.life - t) * 0.7, (p.y / (H * 0.22)));
      var twinkle = 0.55 + 0.45 * Math.sin(p.twPhase + t * p.twFreq * Math.PI * 2);
      var a = p.baseAlpha * twinkle * fadeIn * Math.max(0, fadeOut);
      if (a <= 0.01) return;

      var c = p.col;
      var size = p.size * (0.85 + 0.3 * twinkle);

      // soft luminous halo
      var halo = size * 6;
      var g = ctx.createRadialGradient(x, p.y, 0, x, p.y, halo);
      g.addColorStop(0, "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (a * 0.5) + ")");
      g.addColorStop(0.4, "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (a * 0.18) + ")");
      g.addColorStop(1, "rgba(" + c[0] + "," + c[1] + "," + c[2] + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, p.y, halo, 0, Math.PI * 2);
      ctx.fill();

      // bright core (soft, not harsh)
      ctx.fillStyle = "rgba(255,248,240," + Math.min(1, a * 0.9) + ")";
      ctx.beginPath();
      ctx.arc(x, p.y, size * 0.65, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
      ctx.beginPath();
      ctx.arc(x, p.y, size, 0, Math.PI * 2);
      ctx.fill();

      // 4-point spark
      if (p.star) {
        ctx.strokeStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (a * 0.7) + ")";
        ctx.lineWidth = 0.8;
        var ray = size * 3.4 * (0.7 + 0.5 * twinkle);
        ctx.beginPath();
        ctx.moveTo(x - ray, p.y); ctx.lineTo(x + ray, p.y);
        ctx.moveTo(x, p.y - ray); ctx.lineTo(x, p.y + ray);
        ctx.stroke();
      }
    }

    var last = performance.now();
    var running = true;
    function frame(now) {
      if (!running) return;
      var dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.age += dt;
        p.y -= p.vy * dt;
        if (p.y < -20 || p.age > p.life) reset(p);
        draw(p);
      }
      requestAnimationFrame(frame);
    }

    resize();
    spawn();
    if (!reduce) {
      requestAnimationFrame(frame);
    } else {
      // static gentle sparks for reduced-motion
      for (var i = 0; i < particles.length; i++) { particles[i].age = 2; draw(particles[i]); }
    }

    var rT;
    window.addEventListener("resize", function () {
      clearTimeout(rT);
      rT = setTimeout(function () { resize(); spawn(); }, 200);
    });

    // pause when hero scrolled away (perf)
    if ("IntersectionObserver" in window && !reduce) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
          else if (!e.isIntersecting) { running = false; }
        });
      }, { threshold: 0 }).observe(hero);
    }
  }

  /* ---------------------------------------------------------
     2) MOUSE GRAVITY on the lockup
     --------------------------------------------------------- */
  var word = document.getElementById("heroWord");
  var movim = document.getElementById("heroMovim");
  if (word && hero && !reduce && window.gsap) {
    // smooth, inertial follow (gravity-like lag)
    var wx = gsap.quickTo(word, "x", { duration: 0.9, ease: "power3" });
    var wy = gsap.quickTo(word, "y", { duration: 0.9, ease: "power3" });
    var wr = gsap.quickTo(word, "rotation", { duration: 1.1, ease: "power3" });
    var mx = movim ? gsap.quickTo(movim, "x", { duration: 1.1, ease: "power3" }) : null;
    var my = movim ? gsap.quickTo(movim, "y", { duration: 1.1, ease: "power3" }) : null;

    var STR_X = 34, STR_Y = 22, STR_R = 3.2;  // wordmark pull strength (px / deg)
    var MOV_X = 18, MOV_Y = 12;               // subtitle (lighter → depth)

    function onMove(e) {
      var r = hero.getBoundingClientRect();
      var nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);   // -1..1
      var ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);  // -1..1
      nx = Math.max(-1, Math.min(1, nx));
      ny = Math.max(-1, Math.min(1, ny));
      // gravity: lockup is drawn toward the cursor
      wx(nx * STR_X); wy(ny * STR_Y); wr(nx * STR_R);
      if (mx) { mx(nx * MOV_X); my(ny * MOV_Y); }
    }
    function onLeave() {
      wx(0); wy(0); wr(0);
      if (mx) { mx(0); my(0); }
    }

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
  }
})();
