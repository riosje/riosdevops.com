---
layout: page
title: About
permalink: /about/
weight: 2
---

# **About Me**

Hi I'm **{{ site.author.name }}** :wave:,<br>
I'm a Colombian System Engineer, passionate about cloud computing, and an advocate for the DevSecOps culture. <br />
I love :coffee:, I'm not an expert with a huge coffe setup and an elaborated process ot make 2oz of cofee, I just enjoy a cup of coffe at every moment in any place. <br />

I spend as much time as possible with my family, I'll often at the playground with my toddler son. <br />

I casually follow sports, including Formula 1 and soccer. I also have some interest in cycling, tuning into events like the Giro d Italy and the Tour of France. While I'm not an expert or a fanatic, I just appreciate the thrill of these competitions. <br />

This is me, keeping it real. I'm not here to impress or portray sophistication. I simply enjoy life as it comes.

<div class="text-muted justify-content-center align-items-center p-4 wow animate__animated animate__fadeInUp">
  <div class="row">
    <div class="col-lg-12 text-center">
        <div class="navy-line"></div>
        <h1><span>My Skills</span></h1>
        <br>
    </div>
    {% include about/skills.html title="DevOps Skills" source=site.data.devops-skills %}
    {% include about/skills.html title="Coding Skills" source=site.data.coding-skills %}
  </div>
</div>
<br>
<div class="text-muted wow animate__animated animate__fadeInUp">
<div class="col mt-4">
  <div class="row">
    <div class="col-lg-12 text-center">
        <div class="navy-line"></div>
        <h1><span>My Career</span></h1>
        <br>
    </div>
</div>

{% include timeline.html %}
{% include timeline_responsive.html %}

