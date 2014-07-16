/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_btn-talks}", "click", function(sym, e) {
         sym.getSymbol("view-talks").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__view-talks}", "click", function(sym, e) {
         sym.getSymbol("view-talks").playReverse();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${__view-about}", "click", function(sym, e) {
         sym.getSymbol("view-about").playReverse();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_alert-notify}", "click", function(sym, e) {
         sym.$("alert-notify").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-logo}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("view-about").play();
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_sym-logo}", "touchstart", function(sym, e) {
         sym.$("sym-logo").css({"opacity":"0.5"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-logo}", "touchend", function(sym, e) {
         sym.$("sym-logo").css({"opacity":"1"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-talks}", "touchstart", function(sym, e) {
         sym.$("btn-talks").css({"opacity":"0.5"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-talks}", "touchend", function(sym, e) {
         sym.$("btn-talks").css({"opacity":"1"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-alarm}", "click", function(sym, e) {
         sym.$("alert-notify").show();
         sym.getSymbol("alert-notify").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-alarm}", "touchstart", function(sym, e) {
         sym.$("btn-alarm").css({"opacity":"0.5"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-alarm}", "touchend", function(sym, e) {
         sym.$("btn-alarm").css({"opacity":"1"});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn-addToCal'
   (function(symbolName) {   
   
   })("btn-addToCal");
   //Edge symbol end:'btn-addToCal'

   //=========================================================
   
   //Edge symbol: 'btn-rsvp-yes'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_yes}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_no}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("text-dates").play();
         sym.getComposition().getStage().getSymbol("alert-login").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 201, function(sym, e) {
         sym.getComposition().getStage().getSymbol("text-dates").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-addToCal}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("cal-add").play();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_btn-addToCal}", "touchstart", function(sym, e) {
         sym.$("btn-addToCal").css({"opacity":"0.5"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-addToCal}", "touchend", function(sym, e) {
         sym.$("btn-addToCal").css({"opacity":"1"});

      });
      //Edge binding end

   })("btn-rsvp");
   //Edge symbol end:'btn-rsvp'

   //=========================================================
   
   //Edge symbol: 'btn-rsvp-no'
   (function(symbolName) {   
   
      

      

   })("btn-rsvp-no");
   //Edge symbol end:'btn-rsvp-no'

   //=========================================================
   
   //Edge symbol: 'view-about'
   (function(symbolName) {   
   
   })("view-about");
   //Edge symbol end:'view-about'

   //=========================================================
   
   //Edge symbol: 'view-talks'
   (function(symbolName) {   
   
   })("view-talks");
   //Edge symbol end:'view-talks'

   //=========================================================
   
   //Edge symbol: 'btn-talks'
   (function(symbolName) {   
   
   })("btn-talks");
   //Edge symbol end:'btn-talks'

   //=========================================================
   
   //Edge symbol: 'alert-notify'
   (function(symbolName) {   
   
   })("alert-notify");
   //Edge symbol end:'alert-notify'

   //=========================================================
   
   //Edge symbol: 'text-dates'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 150, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("text-dates");
   //Edge symbol end:'text-dates'

   //=========================================================
   
   //Edge symbol: 'alert-login'
   (function(symbolName) {   
   
   })("alert-login");
   //Edge symbol end:'alert-login'

   //=========================================================
   
   //Edge symbol: 'call-add'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_cal-add}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("cal-add");
   //Edge symbol end:'cal-add'

   //=========================================================
   
   //Edge symbol: 'sym-logo'
   (function(symbolName) {   
   
   })("sym-logo");
   //Edge symbol end:'sym-logo'

   //=========================================================
   
   //Edge symbol: 'btn-alarm'
   (function(symbolName) {   
   
   })("btn-alarm");
   //Edge symbol end:'btn-alarm'

})(jQuery, AdobeEdge, "EDGE-25008638");