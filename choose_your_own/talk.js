// Initialize the datastructure and don't overwrite if it already exists.
var talk = talk || {};
/*
 * variable for storing the detector data structure read back from the server.
 */
talk.master_path_map = {
  "AProblem": {
    "id": "AProblem",
    "title": "It's 1939.  We finally have pictures of distant galaxies, and there's a problem.",
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
    "path_list": [],
    "content": "<p><emph>No one has ever seen such a particle</emph>, but we'd sure like to.  A weakly-interacting, massive, neutral particle could solve not just the problem Zwicky found with too-fast spinning galaxies, but several others as well.</p>"

  },

  "MACHOs": {
    "id": "MACHOs",
    "title": "Could rocks be the missing mass?",
    "short_title": "missing mass: rocks?",
    "path_list": [],
    "content": "<p><emph>Rocks don't glow.</emph> So ... could the missing mass just be lots of tiny little rocks?</p>"
  },
  
  "DetectorTime": {
    "id": "DetectorTime",
    "title": "Let's build a WIMP detector!",
    "short_title": "detector time!",
    "path_list": [],
    "content": "<p>Let's build a detector.</p>"
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
        return "<div class='path' onclick='talk.navigate_to(\"" + path_id + "\");'>" 
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
  if (evt.oldURL.length > evt.newURL.length) {
    var pathID = evt.newURL.match(/[^\/#]+$/)[0]; 
    console.log(pathID);
    talk.navigate_to(pathID);
  }
};

talk.make_pathHTML();

window.onload = function() {
  talk.navigate_to("AProblem");
};

