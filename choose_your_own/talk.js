// Initialize the datastructure and don't overwrite if it already exists.
var talk = talk || {};
/*
 * variable for storing the detector data structure read back from the server.
 */
talk.master_path_map = {
  "AProblem": {
    "id": "AProblem",
    "title": "It's 1939, and there's a problem.",
    "short_title": "galaxies don't make sense",
    "path_list": ["WIMPs", "neutrinos", "MOND", "MACHOs", "DetectorTime"],
    "path_amy": "DetectorTime",
    "content": "<p><emph>It seemed so straightforward.</emph>  Surely we could assume that the mass in a galaxy is directly proportional to the light?</p>"
               + "<p>But this assumption, plus gravity, led to ... complete disagreement with the data Zwicky collected.</p>",
  },

  "neutrinos": {},
  
  "MOND": {},
  
  "WIMPs": {},

  "MACHOs": {},
  
  "DetectorTime": {}
};

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

      var path_arr = thisPath.path_list.map(function(path_id) {
        return "<div class='path' onclick='talk.display_path(\"" + path_id + "\");'>" 
               + path_id 
               + "</div>";
      });
      contentHTML += "<div class='options'>" + path_arr.join('\n') + "</div>";

      thisPath.html = contentHTML;
    } else {
      thisPath.html = 'No content!';
    }
    }
};

talk.display_path = function(pathID) {
    var contentNode = document.getElementById("currentContent");
    var thisPath = talk.master_path_map[pathID];

    range = document.createRange();
    range.selectNodeContents(contentNode);
    range.deleteContents();

    contentNode.insertAdjacentHTML('afterbegin', thisPath.html);

};

talk.make_pathHTML();
window.onload = function() {
  talk.display_path("AProblem");
};
