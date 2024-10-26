var Dice = (function() {
    var entity = {
      "min": 1,
      "max": 6,
      "history": []
    };
  
    entity.roll = function() {
      var nextValue = Math.floor(this.min + Math.random() * this.max);
      this.history.push(nextValue);
      return nextValue;
    }
  
    entity.showHistory = function() { 
      if (this.history.length == 0) {
        document.writeln("<br>No die has been thrown yet.<br>");
      } else {
        document.writeln("<br>Dice rolls ("+ this.history.length +")<br>");
        for (var i = 0, len = this.history.length; i < len; i++) {
          document.writeln("<li>" + this.history[i] + "</li>");
        }
      }
    }
  
    entity.showDie = function(id, num) {
      var html = htmlDie(num);
      document.getElementById(id).innerHTML = html;
      return html;
    }
  
    function htmlDie(num) {
      var html = '<div class="dice" />';
      var pos = positions(num);
  
      if (Array.isArray(pos)) {
        for (var i = 0, len = pos.length; i < len; i++) {
          html += htmlDot(pos[i]);
        }    
      } else {
          html += '<div class="middle">'+ num +'</div></div>'
      }
  
      html += '</div>';
      return html;
    }
  
    function htmlDot(position) {
      return '<div class="'+ position +'"><div class="dot"></div></div>';
    }
  
    function positions(num) {
      switch (num) {
        case 0: return [];
        case 1: return ["middle"];
        case 2: return ["top-left", "bottom-right"];
        case 3: return ["top-left", "middle", "bottom-right"];
        case 4: return ["top-left", "top-right", "bottom-left", "bottom-right"];
        case 5: return ["top-left", "top-right", "bottom-left", "bottom-right", "middle"];
        case 6: return ["top-left", "top-right", 
                        "bottom-left", "bottom-right", 
                        "middle-left", "middle-right"];
        case 7: return positions(6).concat(["middle"]);
        case 8: return positions(6).concat(["top-middle", "bottom-middle"]);
        case 9: return positions(8).concat(["middle"]);
        default: return num;
  
      }
    }
  
    return entity;
  }());
  