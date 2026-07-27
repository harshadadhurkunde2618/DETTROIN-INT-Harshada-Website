// Count-up stats on scroll into view
  const counters = document.querySelectorAll('.stat-num');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const target = +el.dataset.count;
        let cur = 0;
        const step = Math.max(1, Math.round(target/60));
        const t = setInterval(()=>{
          cur += step;
          if(cur >= target){ cur = target; clearInterval(t); }
          el.textContent = cur.toLocaleString();
        }, 20);
        io.unobserve(el);
      }
    });
  }, {threshold:0.5});
  counters.forEach(c=>io.observe(c));

  // Portal demo (only present on the homepage)
  const portalFormEl = document.getElementById('portalForm');
  if (portalFormEl) {
    const sampleNames = ['Aarav Mehta','Diya Kapoor','Rohan Iyer','Sara Khan','Vivaan Joshi','Ananya Rao'];
    portalFormEl.addEventListener('submit', function(e){
      e.preventDefault();
      const roll = document.getElementById('rollInput').value.trim() || 'SV-1042';
      const seed = roll.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
      const name = sampleNames[seed % sampleNames.length];
      const att = 82 + (seed % 16);
      const m1 = 60 + (seed % 35), m2 = 55 + ((seed*3) % 40), m3 = 65 + ((seed*7) % 30);
      document.getElementById('rStudent').textContent = name + ' (' + roll.toUpperCase() + ')';
      document.getElementById('rAttendance').textContent = att + '%';
      document.getElementById('v1').textContent = m1 + '/100';
      document.getElementById('v2').textContent = m2 + '/100';
      document.getElementById('v3').textContent = m3 + '/100';
      document.getElementById('portalResult').classList.add('show');
      requestAnimationFrame(()=>{
        document.getElementById('bar1').style.width = m1+'%';
        document.getElementById('bar2').style.width = m2+'%';
        document.getElementById('bar3').style.width = m3+'%';
      });
    });
  }

  // Dark mode + text size toggles (present on every page)
  const darkToggleEl = document.getElementById('darkToggle');
  const textToggleEl = document.getElementById('textToggle');
  if (darkToggleEl) darkToggleEl.addEventListener('click', ()=>document.body.classList.toggle('dark'));
  if (textToggleEl) textToggleEl.addEventListener('click', ()=>document.body.classList.toggle('big-text'));
