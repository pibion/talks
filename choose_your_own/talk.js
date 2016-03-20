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
    "path_list": ["WIMPs", "neutrinos", "MOND", "MACHOs", "DetectorTime"],
    "path_amy": "DetectorTime",
    "content": "<p><emph>It seemed so straightforward.</emph>  Surely we could assume that in galaxies, the mass is directly proportional to the light?</p>"
               + "<p>But this assumption, plus gravity, led to ... complete disagreement with the data Zwicky collected.</p>"
               + "<figure><img src='images/RotationCurve_2403.png'></figure>",
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
      + "<embed src='millennium_flythru_fast.avi'></embed>"
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
    "title": "Okay.  So I know we've never seen anything like this.  But what if there was a neutral, weakly-interacting particle with mass?",
    "short_title": "missing mass: WIMPs?",
    "path_list": ["PlanDetector","DetectorTime"],
    "path_amy": "DetectorTime",
    "content": "<p><emph>No one has ever seen such a particle</emph>, but we'd sure like to.  A weakly-interacting, massive, neutral particle could solve not just the problem Zwicky found with too-fast spinning galaxies, but several others as well.</p>"

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

  "DetectorTime": {
    "id": "DetectorTime",
    "title": "Let's build a WIMP detector!",
    "short_title": "detector time!",
    "path_list": ["DiscriminateNR","DAMA"],
    "path_amy": "DiscriminateNR",
    "content": "<p>Let's build a detector.</p>"
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
      + " <figure><img src='images/NucRecoilAtoms.jpg'><figcaption></figcaption></figure>"
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
    "content": "<p>CDMS has built detectors that are sensitive to phonons and to ionization.  This gives us the ability to almost completely reject background signals, even at very low energies.  But it comes at a price: the detectors are difficult to make, difficult to use, and expensive.</p>"
      + "<p>But we detect <emph>phonons</emph>.  It's <emph>amazing</emph>.</p>"
      + "<div class='tabs'>"
      + "<section id='tab1'><h2><a href='#tab1'>CDMS detectors</a></h2>"
      + "<div id='detector'>"
      + "<figure><img src='../cdms_intro/TES_circuit.svg'><figcaption>The variable resistor (highlighted) represents the tungsten wires on the surface of the detector</figcaption></figure>"
      + "<ol><li>A neutron interacts with the detector, jostling the crystal lattice.</li>"
      + "<li>The movement of the crystal lattice heats the small tungsten wires on the surface.</li>"
      + "<li>As the tungsten wires warm up, their resistance increases.</li>"
      + "<li>The tunsten wires are held at constant voltage: as their resistance increases, the current through them drops.</li>"
      + "<li>Magnetic-field sensors report the changing current to the physicists.</li></ol>"
      + "</div>"
      + "</section>"
      + "<section id='tab2'><h2><a href='#tab2'>Phonons</a></h2>"
      + "<p>Phonons are the movement of atoms in a crystal.</p>"
      + "</section>"
      + "</div>"
      + "<div><p>Ionization refers to electrons, kicked free from their atoms.</p></div>"
  },

  "Fridge":{
    "id": "Fridge",
    "title": "Go cold or go home.",
    "short_title": "50 mK detectors",
    "path_list": ["NightmareFridge","CDMS"],
    "content": "<p><emph>You knew the detectors needed to be cold, but 50 mK?  Really?</emph>"
      + "<p>The CDMS detectors use tiny tungsten wires - balanced right in the middle of their transition to superconducting - to listen for phonons.  For reasons I have not at all explained, the sharpness of that superconducting transition is related to the temperature at which the transition starts.  As the transition temperature gets colder, the transition also gets steeper.</p>"
      + "<p>So, colder detectors means a steeper transition.  But, uh, 70 mK is pretty easy while 5 mK is nearly impossible.</p>"
      + "<p>How, uh, do we really need to.  Do we really care about a sharp superconducting transition?</p>"
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
    "content": "<p>The best detectors in the world can't help you find WIMPs if you don't record what they hear. So.  How do we record the detector signals?</p>"
      + "<p>For most experiments (including CDMS), recording absolutely everything the detectors hear is impractical: it's too much data.  Hard drives are cheap, but they're not free.</p>"
      + "<p>So for CDMS, the first step to recording what the detectors hear is to decide <emph>when</emph> to record.  The shielding people have done an excellent job, and mostly what the detectors hear is: extremeley boring silence.  To catch the rare moments when the detectors hear something, you need to build a 'discriminator circuit,' or buy one on ebay.</p>"
      + "<p>Now that you have an electronic signal that lets you know when something interesting is going on, get some digitizers.  You'll probably have to work with C.A.E.N. because all the other nuclear instrumentation companies have gone out of business.</p>"
      + "<p>Great!  Now just teach a computer to talk to the digitizers, and you're done!  You can watch the signals flicker across your low-resolution screen that seems disconcertingly hot to the touch.</p>" 
      + "<p>You are happy.  With your detectors, you can see a hidden universe.  Which apparently includes an awful lot of 60 Hz noise.  Did you leave the lights on in the RF room?</p>" 
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
      + "<p>Going underground - deep underground - is an absolute necessity for all the sit-around-and-wait Dark Matter experiments.</p>"
      + "<p>Just be sure that anything you need to control is remotely controllable.  There's a ride to the 27th level at 7 AM and a ride back up at 5 PM.  And no, you can't stay overnight.  What if a fire started?</p>"
      + "<p>Also keep in mind that all the pieces have to fit in the cage.</p>"
      + "<p>And you'll need to have a word with the dudes in charge of the fridge.  The mine has limited ventilation, and the amount of liquid He they're storing could quickly become lethal if it evaporated too quickly.</p>"
      + "<p>Also, don't touch the bats!  Rabies is rare, but still.  Safety fist.</p>"
  },
  "DetectorFab": {
    "id": "DetectorFab",
    "title": "Making the CDMS detectors",
    "short_title": "a recipe for phonon detectors",
    "path_list": ["CDMS"],
    "content": ""
  },
  "Results": {}
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

