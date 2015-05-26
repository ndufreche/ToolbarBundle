/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {


      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
            // scene element
            // be sure to set the child elements of scene class to 'layer'
            var element = sym.$("scene");
            // inject scene element attributes
            	element.attr("id","scene");
            	element.attr("data-scalar-x","15");
            	element.attr("data-scalar-y","7");
            	element.attr("data-friction-x","0.1");
            	element.attr("data-friction-y","0.1");
            // set/inject children of scene elements data-depth values
            // add as many elements to this scene with matching lookup selector and desired data-depth

            	sym.$("herbe_btn").attr("data-depth","1.20");
            	sym.$("dev_btn").attr("data-depth","0.40");
            	sym.$("bee_btn").attr("data-depth","0.30");
            	sym.$("nuage_02_btn").attr("data-depth","0.20");
            	sym.$("nuage_03_btn").attr("data-depth","0.25");
            	sym.$("nuage_04_btn").attr("data-depth","0.30");
            	sym.$("nuage_01_btn").attr("data-depth","0.50");
            	sym.$("nuage_05_btn").attr("data-depth","0.60");
            	sym.$("mountain_01_btn").attr("data-depth","0.20");
            	sym.$("mountain_02_btn").attr("data-depth","0.10");
            // call script function parallax
            element.parallax();


         });
         //Edge binding end


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insérer le code à exécuter lorsque le chargement de la composition est terminé
         /////////size//////////
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage

         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });

         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage

             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales

         // Rescale the stage!
           	 stage.css('transform-origin', ' 0 0');
         	 stage.css('transform', 'scale(' + rescale + ')');
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             console.log(parent,$(window).height(),(stageHeight * rescale));
             if($(window).height()<(stageHeight * rescale)){
             parent.height(200);
             }else{
             parent.height(stageHeight * rescale);
             }
             parent.css("overflow","hidden");
              // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }

         // Make it happen when the browser resizes
         $(window).on('resize', function(){
         	 scaleStage();
         });

         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_back}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         window.open(document.getElementById("bb-home-url").href,"_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'herbe_btn'
   (function(symbolName) {

   })("herbe_btn");
   //Edge symbol end:'herbe_btn'

   //=========================================================

   //Edge symbol: 'dev_btn'
   (function(symbolName) {

   })("dev_btn");
   //Edge symbol end:'dev_btn'

   //=========================================================

   //Edge symbol: 'bee_btn'
   (function(symbolName) {

   })("bee_btn");
   //Edge symbol end:'bee_btn'

   //=========================================================

   //Edge symbol: 'nuage_03_btn'
   (function(symbolName) {



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insérer le code ici
         sym.play(0);

      });
      //Edge binding end

   })("nuage_03_btn");
   //Edge symbol end:'nuage_03_btn'

   //=========================================================

   //Edge symbol: 'nuage_02_btn'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insérer le code ici
         sym.play(0);

      });
      //Edge binding end

   })("nuage_02_btn");
   //Edge symbol end:'nuage_02_btn'

   //=========================================================

   //Edge symbol: 'nuage_01_btn'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insérer le code ici
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insérer le code ici
      });
      //Edge binding end

   })("nuage_01_btn");
   //Edge symbol end:'nuage_01_btn'

   //=========================================================

   //Edge symbol: 'nuage_04_btn'
   (function(symbolName) {

   })("nuage_04_btn");
   //Edge symbol end:'nuage_04_btn'

   //=========================================================

   //Edge symbol: 'nuage_05_btn'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         // insérer le code ici
         sym.play(0);

      });
      //Edge binding end

   })("nuage_05_btn");
   //Edge symbol end:'nuage_05_btn'

   //=========================================================


   //Edge symbol: 'mountain_01_btn'
   (function(symbolName) {

   })("mountain_01_btn");
   //Edge symbol end:'mountain_01_btn'

   //=========================================================

   //Edge symbol: 'mountain_02_btn'
   (function(symbolName) {

   })("mountain_02_btn");
   //Edge symbol end:'mountain_02_btn'

   //=========================================================

   //Edge symbol: 'oeil'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5819, function(sym, e) {
         // insérer le code ici
         sym.play(1);

      });
      //Edge binding end

   })("oeil");
   //Edge symbol end:'oeil'

   //=========================================================

   //Edge symbol: 'bras_anim_01'
   (function(symbolName) {

   })("bras_anim_01");
   //Edge symbol end:'bras_anim_01'

   //=========================================================

   //Edge symbol: 'bras_anim'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("bras_anim");
   //Edge symbol end:'bras_anim'

   //=========================================================

   //Edge symbol: 'panneau_anim'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("panneau_anim");
   //Edge symbol end:'panneau_anim'

   //=========================================================

   //Edge symbol: 'patte_anim'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("patte_anim");
   //Edge symbol end:'patte_anim'

   //=========================================================

   //Edge symbol: 'goutte_anim'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("goutte_anim");
   //Edge symbol end:'goutte_anim'

   //=========================================================

   //Edge symbol: 'ailes_anim'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("ailes_anim");
   //Edge symbol end:'ailes_anim'

   //=========================================================

   //Edge symbol: 'numero'
   (function(symbolName) {

   })("numero");
   //Edge symbol end:'numero'

   //=========================================================

   //Edge symbol: 'bt_back'
   (function(symbolName) {

   })("bt_back");
   //Edge symbol end:'bt_back'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-332018913");