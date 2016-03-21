// Initialize the datastructure and don't overwrite if it already exists.
var talk = talk || {};
/*
 * variable for storing the detector data structure read back from the server.
 */
talk.master_path_map = {
  "AProblem": {
    "id": "AProblem",
    "title": "It's 1939.  We're looking at distant galaxies, and there's a problem.",
    "short_title": "galaxies don't make sense",
    "path_list": ["WIMPs", "neutrinos", "MOND", "DetectorTime"],
    "path_amy": "DetectorTime",
    "content": "<p><emph>It seemed so straightforward.</emph>  Surely we could assume that in galaxies, the mass is directly proportional to the light?</p>"
               + "<p>But this assumption leads to ... complete disagreement with the data.</p>"
               + "<figure class='flexy'><img style='height: 350px;' src='images/RotationCurve_2403.png'><figcaption>The rotation speed of visible matter in galaxies (black dots) dramatically disagrees from our prediction (dotted, blue line).  From <a href='http://arxiv.org/abs/1210.0529v4'>arxiv.org/abs/1210.0529v4</a></figcaption></figure>"
  },

  "neutrinos": {
    "id": "neutrinos",
    "title": "Could neutrinos be the missing mass?",
    "short_title": "missing mass: neutrinos?",
    "path_list": [],
    "content": "<p><emph>Once we realized neutrinos have mass,</emph> it made a lot of sense to consider them for Dark Matter candidates.</p>"
      + "<aside>To qualify as a Dark Matter candidate, you must (1) have mass and (2) not shine.</aside>"
      + "<p>But if you try to simulate our universe using neutrinos as Dark Matter, you'll have trouble: as your simulation runs, you should see matter clump into galaxies and groups of galaxies.  With neutrinos as your Dark Matter, matter stays far too evenly distributed.</p>"
      + "<p>The problem is that neutrinos move too fast - they zing around at nearly the speed of light.  We call neutrinos, 'hot dark matter'.  And to reproduce our galactic structure, we need 'cold dark matter.'</p>"
      + "<figure class='flexy'><img src='images/seqD_063a_half.jpg'><figcaption>An impressively wide array of measurements tell us that matter in our universe clumps into strands of a 'cosmic web'.  This image shows the structure of matter in a simulated universe.  The scale is vast - each point of light is an entire galaxy.  From the <a href='http://wwwmpa.mpa-garching.mpg.de/galform/virgo/millennium/'>Millenium Simulation</a>.</figcaption></figure>"
  },
  
  "MOND": {
    "id": "MOND",
    "title": "What if we're a little wrong about gravity?",
    "short_title": "gravity is wrong",
    "path_list": [],
    "content": "<p><emph>Everyone knows</emph> how to calculate gravitational force.  All the textbooks tell us that the gravitational force exerted by a mass of \\(M_1\\) on an object with mass \\(M_2\\) is gets weaker and weaker as the distance \\(r\\) between them grows: $$\\frac{G M_1 M_2}{r^2}.$$</p>"
       + "<p>What if that's just a tiny bit wrong?  If gravity were just a tiny bit stronger, how would we know?  $$\\frac{G M_1 M_2}{r^{1.99999999999997}}$$</p>"
       + "<p>It turns out that you can solve the disagreement with data by adjusting gravity!</p>"
       + "<p>Beware, though: you still need to explain the Bullet Cluster.</p>"
  },
  
  "WIMPs": {
    "id": "WIMPs",
    "title": "Imagine a massive, electrically neutral, weakly-interacting particle.",
    "short_title": "missing mass: WIMPs?",
    "path_list": ["PlanDetector","DetectorTime"],
    "path_amy": "DetectorTime",
    "content": "<p><emph>No one has ever seen such a particle</emph>, but we'd sure like to.  A weakly-interacting, massive, neutral particle could solve not just the problem of too-fast spinning galaxies, but several others as well.</p>"

  },

  "MACHOs": {
    "id": "MACHOs",
    "title": "Could rocks be the missing mass?",
    "short_title": "missing mass: rocks?",
    "path_list": [],
    "content": "<p><emph>Rocks don't glow.</emph> So ... could the missing mass just be lots of tiny little rocks?</p>"
  },
  
  "PlanDetector": {
    "id": "PlanDetector",
    "title": "We want to detect WIMPs. <BR> (You can't always get what you want.)",
    "short_title": "WIMP detection: impossible?",
    "path_list": ["SignalRate","BackgroundRate","EnergyDeposited","DetectorTime"],
    "path_amy": "DetectorTime",
    "content": "<p><emph>Impossible searches for imaginary particles are fine if you've already got tenure.</emph>  But what if you don't?  Or are just averse to wasting your time?<p>"
      + "<p>We want to search for a particle that - by definition - rarely interacts. How long will we need to wait before we see a signal?  10 years?  100 years?  More?</p>" 
      + "<p>Suppose a WIMP does interact with our detector. How much energy will it deposit?  Is existing detector technology sensitive enough to see it?</p>"
      + "<p>And while WIMPs will rarely, if ever, interact in our detector, plenty of other particles are happy to leave signals.  How do we tell what signals are WIMPs, and what signals are ordinary gammas/neutrons/electrons/etc.?</p>"
  },

  "SignalRate": {
    "id": "SignalRate",
    "title": "Maybe. It depends.",
    "path_list": [],
    "content": ""
  },

  "BackgroundRate":{
    "id": "BackgroundRate",
    "title": "The background rate is unpleasantly high.",
    "path_list": [],
    "content": ""
  },

  "EnergyDeposited": {
    "id": "EnergyDeposited",
    "title": "It depends.  What mass are you assuming for the WIMP?",
    "path_list": [],
    "content": ""
  },

  "DetectorTime": {
    "id": "DetectorTime",
    "title": "Let's build a WIMP detector!",
    "short_title": "detector time!",
    "path_list": ["DiscriminateNR","DAMA"],
    "path_amy": "DiscriminateNR",
    "content": "<p><emph>Thanks to our careful considerations, we know that</p>"
      + "<ul>"
      + "<li>WIMPs are most likely to deposit very small amounts of energy in a detector</li>"
      + "<li>Background interactions with the electrons in our detector vastly outnumber WIMP interactions in our detector - by orders of magnitude</li>"
      + "<li>If we go underground, background interactions with the nuclei in our detector could be comparable to the number of WIMP interactions.</li></ul>"
      + " <figure style='height:450px'><img src='images/NucRecoilAtoms.jpg'><figcaption>Most background radiation interacts with the electrons in a detector.  WIMPs would prefer to interact with a nucleus.</figcaption></figure>"

  },

  "DAMA": {
    "id": "DAMA",
    "title": "That's a lot of background signal.  But I think this can still work.",
    "short_title": "Background? Bring it.",
    "path_list": [],
    "content": "<p><emph>What if the number of WIMPs I see in my detector changed, predictably, over time?</emph>  That might make it possible to see the WIMP signal, even against so much background signal.</p>"
      + "<p>And this is actually quite reasonable!</p>"
      + "<p>We expect Dark Matter to rotate about the center of the galaxy just like the visible matter does.  You can picture rotating streams of Dark Matter, moving right along with the center of our solar system - the sun.</p>"
      + "<p>While the sun always moves with the Dark Matter stream, the earth does not.  In one year, we circle the sun, spending half our time moving with the Dark Matter stream, and half our time moving against it.</p>"
      + "<p>Both the DAMA and Cogent experiments use detectors that can't distinguish WIMP-like signals from gamma-like background signals.  Instead, they search for an annual modulation in their signal.  <emph>And they totally see this!</emph></p>"
      + "<p>While both DAMA and Cogent see a signal, the Dark Matter community does not generally consider this to be a discovery of Dark Matter because no other type of detector has confirmed this signal.</p>"
  },

  "DiscriminateNR": {
    "id": "DiscriminateNR",
    "title": "I gotta know what I'm looking at, or I'll go crazy.",
    "short_title": "No!  Background!  Signal!",
    "path_list": ["LUX","DAMIC","CDMS","COUPP"],
    "path_amy": "CDMS",
    "content": "<p>Building a detector that can tell you how much energy a particle just deposited is tricky.  How do you build a detector that can also tell you what kind of particle interacted?</p>"
      + "<p><emph><strong>Amazing fact:</strong></emph> Nuclei dissipate energy differently than electrons do.</p>"
      + "<p><emph><strong>Solution:</strong></emph> Build a detector that senses two different types of energy depositions.</p>"
      + " <figure style='height:450px'><img src='images/NucRecoilAtoms.jpg'><figcaption>A nucleus, when kicked, will dissipate most of its energy by creating phonons.  An electron prefers to dissipate its energy by freeing other electrons from their bound states.</figcaption></figure>"
  },

  "LUX": {
    "id": "LUX"
  },

  "DAMIC": {
    "id": "DAMIC"
  },

  "COUPP": {
    "id": "COUPP"
  },

  "CDMS": {
    "id": "CDMS",
    "title": "Listening for phonons.",
    "short_title": "phonon detectors",
    "path_list": ["Fridge","ReadoutElectronics","DetectorFab","DAQ","Shielding","Soudan","Results"],
    "path_amy": "DetectorFab",
    "content": "<p>CDMS detectors sense both phonons and ionization.  This gives us the ability to almost completely reject background signals, even at very low energies."
      + "<BR><BR>Detecting phonons is not easy, but it's worth it.  Phonons are <emph>amazing</emph></p>"
      + "<div class='tabs'>"
      + "<a name='detector-tab' onclick='talk.selectTab(this);'>CDMS detectors</a>"
      + "<a name='phonon-tab' class='selected' onclick='talk.selectTab(this);'>Phonons</a>"
      + "<a name='ionization-tab' onclick='talk.selectTab(this);'>Ionization</a>"
      + "<a name='superconductivity-tab' onclick='talk.selectTab(this);'>Superconducting Transition</a>"

      + "<section id='detector-tab'>"
      + "<div class='flex-container'>"
      + "<figure><img src='../cdms_intro/TES_circuit.svg'><figcaption>The variable resistor (highlighted) represents the tungsten wires on the surface of the detector</figcaption></figure>"
      + "<ol><li>A neutron interacts with the detector, jostling the crystal lattice.</li>"
      + "<li>The movement of the crystal lattice heats the small tungsten wires on the surface.</li>"
      + "<li>As the tungsten wires warm up, their resistance increases.</li>"
      + "<li>The tunsten wires are held at constant voltage: as their resistance increases, the current through them drops.</li>"
      + "<li>Magnetic-field sensors report the changing current to the physicists.</li></ol>"
      + "</div>"
      + "</section>"

      + "<section id='phonon-tab' class='selected'>"
      + "<p>Phonons are the movement of atoms in a crystal.</p>"
      + "<p>When a particle deposits energy in the detector, one of the ways it can deposit that energy is by creating phonons.</p>"
      + " <figure style='height:400px'><img src='images/NucRecoilAtoms.jpg'><figcaption>The regularly-spaced nuclei in this depiction of a crystal (not to scale!) are attached as though by loose springs.  The whole thing can bounce and move together.  See <a href='http://www.pbs.org/wgbh/nova/physics/dark-matter.html'>www.pbs.org/wgbh/nova/physics/dark-matter.html</a>.</figcaption></figure>"
      + "</section>"

      + "<section id='ionization-tab'>"
      + "<p>Ionization refers to electrons, kicked free from their atoms.</p>"
      + "<p>Kicking electrons free is another way a particle can deposit energy in the detector.</p>"
      + "<p>Ionization is an important part of the CDMS detectors - we use it to select WIMP-like eventsfrom a sea of background events.  This talk does not discuss ionization in detail, though, mostly becuase the ionization sensors aren't as tricky as the phonon sensors.</p>"
      + "</section>"

      + "<section id='superconductivity-tab'>"
      + "<p>Materials going through a superconducting transition are - briefly - exquisite sensors.</p>"
      + "<p>A feedback circuit holds the CDMS sensors right in the middle of their transition.</p>"
      + " <figure style='height:400px'><img src='images/713d0783-80ac-4956-ae0a-3a6cddd6d10d.jpg'><figcaption>The resistivity of doped FeSe as a function of temperature.  The sudden drop is its 'supercondcting transition.'  This compound is always sensitive to temperature - but is extremely sensitive to temperature during its transition.  From <a href='http://dx.doi.org/10.4236/msa.2012.39090'>dx.doi.org/10.4236/msa.2012.39090</a>.</figcaption></figure>"
      + "</section>"
      + "</div>"
  },

  "Fridge":{
    "id": "Fridge",
    "title": "Go cold or go home.",
    "short_title": "50 mK detectors",
    "path_list": ["NightmareFridge","CDMS"],
    "content": "<p><emph>You knew the detectors needed to be cold, but 50 mK?  Really?</emph>"
      + "<p>The CDMS detectors use tiny tungsten wires - balanced right in the middle of their transition to superconducting - to listen for phonons.  For reasons I have not at all explained, the sharpness of that superconducting transition is related to the temperature at which the transition starts.  As the transition temperature gets colder, the transition also gets steeper.</p>"
      + "<p>But cold is not easy.  While 70 mK is pretty easy, 5 mK is nearly impossible.</p>"
      + "<p>So how much do we really care about a sharp superconducting transition?</p>"
      + "<p>Unfortunately for you, fridge maker, we care a lot.  The sharpness of the superconducting transition directly affects the signal-to-noise ratio of our detector.  And the signal-to-noise ratio directly affects our ability to see very, very small energy depositions.</p>"
      + "<p>So you have to go cold.  But really, 50 mK is no big deal.  A 'Dilution Refridgerator' is a common (ish) piece of equipment that can easily (ish) cool our detectors to 50 mK.  Fork over $100,000 to Janis, and we'll be set.</p>"
      + "<p>Except.  Where will the shielding go?</p>"
      + "<figure><img><figcaption></figcaption></figure>"
  },
  "NightmareFridge": {
    "id": "NightmareFridge",
    "title": "An unconvential fridge design",
    "short_title": "coldfinger fridge",
    "path_list": ["CDMS"],
    "content": "<p><emph>It took two years, and you never doubted it would work.<emph></p>"
      + "<figure><img src='../cdms_intro/fridge_icebox_align.svg'><figcaption>The fridge at Soudan gets the 'fridge stuff' out of the way so the detectors (black rectangles, center) can be surrounded with plastic and lead shielding.  This image is color-coded: red indicates the searing heat of room temperature, while black indicates the incredibly-cold 50 mK.</figcaption></figure>"
  },
  "ReadoutElectronics": {
    "id": "ReadoutElectronics",
    "title": "Amplify the signal.",
    "short_title": "amplify the signal with SQUIDs",
    "path_list": ["CDMS"],
    "content": "<p>The signal produced by many physics detectors is often inconveniently small.</p>"
      + "<p>Nanovolts?  Picoamps?  Off-the-shelf electronics from nuclear physics instrumentation companies wants your signal in volts.  Like, 1 to 10 Volts.</p>"
      + "<p>So you need to amplify the detector signal.  Without adding noise!</p>"
      + "<p>You need SQUIDs.</p>"
  },
  "DAQ": {
    "id": "DAQ",
    "title": "Recording what your detectors hear.",
    "short_title": "gotta write it down",
    "path_list": ["CDMS"],
    "content": "<p>The best detectors in the world can't help you find WIMPs if you don't record what they hear.</p>"
      + "<p>For CDMS, recording absolutely everything the detectors hear is just too much data.</p>"
      + "<p>The first step to recording what the detectors hear is to <strong>decide <emph>when</emph> to record</strong>.  The shielding people have done an excellent job, and mostly what the detectors hear is: extremeley boring silence.  To catch the rare moments when the detectors hear something, you need to build a 'discriminator circuit,' or buy one on ebay.</p>"
      + "<p>Now that you know when something interesting is going on, <strong>get some digitizers</strong>.  These will convert your analog detector signal into something your computer can understand - a digital signal.</p>"
      + "<p>Great!  Now just <strong>teach a computer to talk to your digitizers</strong>, and you're done!  You can watch the signals flicker across your low-resolution screen that seems disconcertingly hot to the touch.</p>" 
      + "<figure><img src='images/PA090054.JPG'><figcaption>You are happy.  With your detectors, you can see a hidden universe.</figcaption></figure>"
  },
  "Shielding": {
    "id": "Shielding",
    "title": "Super sensitive detectors are a double-edged sword.",
    "short_title": "shield out the boring radiation",
    "path_list": ["CDMS"],
    "content": "<p>When building a WIMP detector, there's a short list of particles you need to worry about: gammas and neutrons.  Lead shields out gammas quite well, and plastic shields out neutrons (low energy neutrons, at least) well.</p>"
  },
  "Soudan": {
    "id": "Soudan",
    "title": "Shielding step one: go underground.",
    "short_title": "deep underground",
    "path_list": ["CDMS"],
    "content": "<p>The CDMS experiment operated on the 27th level of the Soudan iron mine: half a mile underground.  The half-mile of overhead rock (almost) completely shields out cosmic radiation.</p>"
      + "<div class='bss-slides'>"
      + "<figure><img style='height:500px;' src='images/cosmic_rays.jpg'><figcaption>Going underground - deep underground - is an absolute necessity for all the sit-around-and-wait Dark Matter experiments.</figcaption></figure>"
      + "<figure><img src='../cdms_intro/P1270009.jpg'><figcaption>Keep in mind that all the pieces have to fit in the cage.</figcaption></figure>"
      + "<figure><img src='images/PB040001.jpg'><figcaption>Be sure that anything you need to control is remotely controllable.  There's a ride to the 27th level at 7 AM and a ride back up at 5 PM.  And no, you can't stay overnight.  What if a fire started?</figcaption></figure>"
      + "<figure><img src='../cdms_intro/Slide04_DavisCavern.jpg'><figcaption>Make yourself at home. This image shows a cavern at the Homestake mine in western South Dakota. But the atmosphere is spot-on for Soudan. Image from www.symmetrymagazine.com.</figcaption></figure>"
      + "</div>"
      //+ "<p>Also, don't touch the bats!  Rabies is rare, but still.  Safety fist.</p>"
      //+ "<p>And you'll need to have a word with the dudes in charge of the fridge.  The mine has limited ventilation, and the amount of liquid He they're storing could quickly become lethal if it evaporated too quickly.</p>"
  },
  "DetectorFab": {
    "id": "DetectorFab",
    "title": "Making the CDMS detectors",
    "short_title": "a recipe for phonon detectors",
    "path_list": ["CDMS"],
    "content": "<p><emph>The detector is basically just a variable resistor, they say, waving a hand to show its simplicity.</emph></p>"
      + "<p><emph>You disagree.</emph></p>"
      + "<div class='bss-slides'>"
      + "<figure><img style='height:500px;' src='../cdms_intro/weld.png'><figcaption>The final step.  Once the sensors are deposited onto the germanium crystal, you'll jump to the outside world with a gossamer-thin wire.</figcaption></figure>"
      + "<figure><img src='../cdms_intro/TES_schematic.jpg'><figcaption>A schematic of the transition-edge sensor. The thin tungsten strip (pink) is held in the middle of its superconducting transition.  Because the tungsten strip is very small, it doesn't collect many phonons.  So the tungsten is attached to large aluminum fins (blue); some of this energy trickles into the tungsten wire, warming it. From 10.1016/j.nima.2014.10.043.</figcaption></figure>"
      + "<figure><img src='../cdms_intro/TES_schematic.jpg'><img src='../cdms_intro/TES_oops.jpg'><figcaption>A closeup view of two different transition-edge sensors. The photolithographic fabrication hiccuped for each; a drop of acid will remove them from the sensor chain. Notice the circular wire-bonding pad on the lower left of the image. These are placed along the phonon sensor path periodically so that individual phonon sensors can be removed without breaking the entire channel. Image from 10.1016/j.nima.2014.10.043; explanations from Joel Sander.</figcaption></figure>"
      + "<figure><img src='../cdms_intro/TES_schematic.jpg'><img src='../cdms_intro/FIG10.jpg'><figcaption>The whole point of the aluminum fins is to collect phonons and then deliver them to your superconducting tungsten wire.  This works poorly when the aluminum fin doesn't actually touch the tungsten wire.  Image from 10.1016/j.nima.2014.10.043.</figcaption></figure>"

      + "</div>"

  },
  "Results": {
    "id": "Results",
    "title": "Lots of hard work, two plots.",
    "path_list": [],
    "content": "<div class='bss-slides'>"
          + "<figure><img style='height:500px;' src='../cdms_intro/yield_bands_402.svg'><figcaption>From DOI: 10.1103/PhysRevD.92.072003</figcaption></figure>"
                + "<figure><img src='../cdms_intro/c58r/figures/c58r_Worldlimits.svg'><figcaption>From DOI: 10.1103/PhysRevD.92.072003</figcaption></figure>"
    + "</div>"
  }
};

talk.state_map = {"current_pathID": null, 
                  "history_pathID": []};

/*
 * Function that creates the appropriate server IP and arguments string to
 * retrieve detector data.
 */
talk.make_pathHTML = function() {
    for (key in talk.master_path_map) {
    thisPath = talk.master_path_map[key];
     
    if("title" in thisPath && "content" in thisPath) {
      var contentHTML = "<div class='content'><h1>" + thisPath.title + "</h1>";
      contentHTML += thisPath.content + "</div>";

      var path_str = '';

      if(thisPath.path_list.length > 0) {
      var path_arr = thisPath.path_list.map(function(path_id) {
        class_str = 'path';
        if ("path_amy" in thisPath) {
          if (thisPath.path_amy === path_id) {
            class_str += ' amy';
          }
        }

        return "<div class='" + class_str 
               + "' onclick='talk.navigate_to(\"" + path_id + "\");'>" 
               + path_id 
               + "</div>";
      });
      path_str = path_arr.join('\n');
      } else {
        path_str = "<div class='path'>"
                   + "The edge of this talk."
                   + "</div>";
      }
      contentHTML += "<div class='options'>" + path_str + "</div>";

      thisPath.html = contentHTML;
    } else {
      thisPath.html = 'No content!';
    }
    }
};

talk.display_path = function(pathID) {
    var contentNode = document.getElementById("currentContent");
    var thisPath = talk.master_path_map[pathID];

    var range = document.createRange();
    range.selectNodeContents(contentNode);
    range.deleteContents();

    contentNode.insertAdjacentHTML('afterbegin', thisPath.html);
};

talk.display_breadcrumbs = function() {
    var navNode = document.getElementById("breadcrumbs");
    var nav_html_arr = talk.state_map.history_pathID.map(function(thisPath){
        return "<a onclick='talk.navigate_to(\"" + thisPath + "\");'>" 
               + thisPath 
               + "</a>";
    });
    var nav_html = '<nav>' + nav_html_arr.join(' ') + '</nav>';

    var range = document.createRange();
    range.selectNodeContents(navNode);
    range.deleteContents();

    navNode.insertAdjacentHTML('afterbegin', nav_html);
};

talk.selectTab = function(tab_el) {
  var parent_el = tab_el.parentElement;
  var id_str = tab_el.getAttribute('name');
  var section_el = document.getElementById(id_str);

  // turn everything off
  var el_arr = parent_el.childNodes;
  for (var i = 0; i < el_arr.length; i++) {
    el_arr[i].classList.remove('selected');
  }

  // turn the targeted tab on
  tab_el.classList.add('selected');
  section_el.classList.add('selected');
};

talk.navigate_to = function(pathID) {
  talk.state_map.current_pathID = pathID;

  var index = talk.state_map.history_pathID.indexOf(pathID);
  if (index > -1){
    talk.state_map.history_pathID = talk.state_map.history_pathID.slice(0,index+1);
  } else {
    talk.state_map.history_pathID.push(pathID);
  }
  
  //var url = window.location.href + '#' + talk.state_map.history_pathID.join('\/');
  //history.pushState(talk.state_map,null);
  window.location.hash = '#' + talk.state_map.history_pathID.join('\/');
  talk.display_path(pathID);
  talk.display_breadcrumbs();
  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  makeBSS('.bss-slides');
};

window.onhashchange = function (evt) {
  console.log(evt);
  if (evt.oldURL.length != evt.newURL.length) {
    var pathID = evt.newURL.match(/[^\/#]+$/)[0]; 
    console.log(pathID);
    talk.navigate_to(pathID);
  }
};

talk.make_pathHTML();

window.onload = function() {
  talk.navigate_to("AProblem");
};

