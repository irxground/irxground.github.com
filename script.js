
var Irxground

;(function(module) {
  var starred;
  var starredFilter = "";

  function bindStarred() {
    function apply(repos) {
      var root = $("#starred_items");
      root.empty();
      $("#starred_template").tmpl(repos).appendTo(root);
    }
    var words = _.map(starredFilter.split(' '), function(s){
      return s.toLowerCase();
    });
    var filtered = _.filter(starred, function(repo){
      var search = (repo.full_name + repo.description).toLowerCase();
      return _.all(words, function(word) { return search.indexOf(word) >= 0; });
    });
    apply(filtered);
  };
  $(document).ready(function(){
    bindStarred();
    $("#starred_search").keyup(function(event) {
      if (starredFilter != this.value) {
        starredFilter = this.value;
        bindStarred();
      }
    });
  });
  module.setStarred = function(model) {
    starred = model.data;
  };
})(Irxground || (Irxground = {}));

