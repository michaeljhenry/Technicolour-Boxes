var touchController = (function() {
    return {
        getColour: function() {
            var newColour =  '#' + Math.random().toString(16).slice(2, 8); // could've chosen 3,8. We started at 2 because we wanted'
            // to remove the "0" and "." from the decimal number. Math.random produces a number between 0 and 1 apparently. So we'd get a 0.1F4FA9EB...

            return newColour;
        }
    }
})();

var UIController = (function() {
    return {
        displayColour: function(newColour) {
            event.target.style.backgroundColor = newColour;
            event.target.style.boxShadow = '0 0 5px #ffffff';
        },

        removeShadow: function() {
            event.target.style.boxShadow = '';
        }
    }
})();

var controller = (function(touchCtrl, UICtrl) {
    var setupEventListeners = function() {
        document.querySelectorAll(".box").forEach(function(el) {
        el.addEventListener("mouseover", addColourCtrl);
        });
        document.querySelectorAll(".box").forEach(function(el) {
            el.addEventListener("mouseout", removeShadowCtrl);
            });
    }

    var addColourCtrl = function() {
        var colour = touchCtrl.getColour();

        UICtrl.displayColour(colour);
    }

    var removeShadowCtrl = function () {
        UICtrl.removeShadow();
    }

    setupEventListeners();
})(touchController,UIController);
