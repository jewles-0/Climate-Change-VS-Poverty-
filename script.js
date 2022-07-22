/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support (insert act here) for (insert result of act here).As citizens of this Earth,it is our responsibilty to take action and protect Earth to our best ability. I have been directly and indrectly effected by climate change over the course of inhibating this Earth. A few example, " + learning + ". Please support (insert act here)";
}


//Move these variables to the top
var factList = [
  "Unchecked, climate change will push up to 130 million people into poverty over the next 10 years.",
  "74 of the world’s poorest countries —those served by the International Development Association (IDA), the World Bank’s multibillion-dollar fund for the poorest countries —account for less than one tenth of global greenhouse gas emissions. These countries are also hardest hit by the impacts of climate change",
  "Climate change may affect the production of maize (corn) and wheat as early as 2030 under a high greenhouse gas emissions scenario, according to a new NASA study published in the journal, Nature Food. Maize crop yields are projected to decline 24%, whole wheat could potentially see growth of about 17%.",
  "Climate change is likely to diminish continued progress on global food security through production disruptions that lead to local availability limitations and price increases, interrupted transport conduits, and diminished food safety, among other causes.",
  "Our escalating climate emergency is also a humanitarian emergency. Even if rising temperatures can be kept within 1.5°C of pre-industrial levels (and currently we are on course for 2.7°C) the world can expect a future characterised by worsening global food crises, biodiversity loss, more frequent extreme weather events, and shorter growing seasons. Fresh water will become scarcer and disease and malnutrition will rise, contributing to displacement and conflict.",
  "In 2020, 2.37 billion people were affected by malnutrition and irregular access to nutritional needs.",
  "Climate change is set to affect yield quantity and quality, reproduction, growth rates and increased temperature-related stress and deaths in livestock, as well as feed quality and spread of pests, ruminant and zoonotic diseases. Water-resource availability for livestock will decrease because of increased runoff and reduced groundwater resources. Globally, a decline in livestock of 7–10% is expected at 2°C, with associated economic losses of between $9.7 and $12.6 billion.",
  "Increased demand for dwindling resources, changes in tax and subsidy regimes, and fossil fuel availability and prices (pressurised by the global shift to more resource intensive, meat-based diets) are diminishing access to adequate nutrition for less well-off communities, especially women and children.",
  " In 2021, the World Economic Forum announced that biodiversity loss is the third greatest threat facing humanity, behind weapons of mass destruction and state collapse. Since the 1900s, 75% of plant genetic diversity has been lost as farmers worldwide have swapped local varieties for genetically uniform, high-yielding varieties and today just 12 crops and five animal species provide 75% of the food we produce. This loss of agricultural diversity has contributed to climate change, ecosystem destruction and hunger.",
  " The degradation of coastal ecosystems reduces protection against storms, tsunamis and other sudden-onset events, leaving people exposed and vulnerable and increasing their risk of displacement. Without intervention, between 145 million and 565 million people living in coastal areas today will be exposed to, and affected by, rising sea levels in the future.",
  "Additional crises, such as Covid-19, add to this complexity. Climate projections anticipate a 54% increase in armed conflict (393,000 deaths) by 2030 in the absence of climate change mitigation.",
  "The 2019 IPCC31 Climate Change and Land report concludes that extreme weather and climate may lead to increased displacement and conflict. The eight worst food crises in 2019 were linked to both climate change impacts and conflict.",
  " Extreme weather has contributed to conflict and terrorism in fragile states that have led to the displacement of 80 million people from their homes, now the highest level in human history. By 2050, more than 143 million people could be driven from their homes by conflict over food and water insecurity and climate-driven natural disasters according to the World Bank. And by 2070, almost 20% of the planet could be too hot to be habitable.",
 "Of the 124 million people worldwide who face “crisis levels” of acute food insecurity, 76% were affected by climate shocks and extremes, according to the Food and Agriculture Organization, and more than half of the people in developing countries live in rural communities dependent on agriculture – a sector highly vulnerable to environmental conditions.",
 " Rising temperatures increase the costs of agricultural production and threaten biodiversity, with one million species in danger of extinction that affect crop growth, fisheries, and livestock.",
 "Warmer temperatures could expose as many as one billion people to deadly infectious diseases such as Zika, dengue, and chikungunya. In the U.S. alone, disease cases from mosquitoes, ticks, and fleas more than tripled from just under 30,000 to almost 100,000 a year from 2004 to 2016.",
"The World Bank estimates that the effects of climate change could push an additional 100 million people below the poverty line by 2030. In addition, the impact of extreme weather is resulting in $520 billion in annual consumption losses and is pushing 26 million people into poverty each year.",
   "Major commercial ports in developing countries – including Rio de Janeiro, Mumbai, Guangzhou, and Dar es Salaam – face the threat of being submerged by rising sea levels, and by 2050 at least 300 million people will live in coastal areas threatened by dangerous flooding.",
"A Stanford University study found that climate change has increased economic inequality between developed and developing nations by 25% since 1960."];



var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
  //* This is the collapsape story codes*//

function openMenuOne(e){
  document.getElementById("openingOne").innerHTML = "Every day, Americans are already experiencing the effects of climate change. Americans who reside near a shoreline are more likely than those who do not to believe that climate change is having an impact on their neighborhood. According to the PW Research organization, seven out of ten Americans who live within 25 miles of a beach feel that climate change is having some impact on their neighborhood. This compares to 57% of people who live more than 300 miles from the coast.As climate change seems to be on the rise, it seems that it is only sequentially going to affect things that are not used to the harsh changes. As countries continue to suffer from climate change, this is becoming increasingly true. It is affecting the agricultural practices of farmers here in the United States. Addressing climate change is now a question of survival for many American farmers who have suffered significant losses due to increasingly severe floods, storms, and droughts. And this is going to affect American citizens that rely on these farmers for goods. According to the World Bank:New research shows that up to 132 million people could be pushed into extreme poverty by climate change by 2030. The scientific climate change panel of the United Nations has cautioned that in order to prevent the worst effects of climate change, mankind must alter how they produce food and use land.USDA Secretary Tom Vilsack said at the beginning of February 2022 that the U.S. Department of Agriculture will invest $1 billion in initiatives for farmers, ranchers, and owners of forest land to utilize measures that reduce greenhouse gas emissions or collect and store carbon. The investment comes after President Joe Biden called on American farmers to take the lead in offsetting emissions and promised to cut emissions from the agriculture sector in half by 2030 in an effort to combat climate change. The Environmental Protection Agency estimates that the sector is responsible for more than 10% of American emissions. According to the agency, a variety of public and private organizations, including state, local, and tribal governments; nonprofits; small enterprises; and colleges, are eligible to apply for grants ranging from $5 million to $100 million.This only the beginning.";    
	document.getElementById("openingOne").style.display = "block";
}
function closeMenuOne(e){ 
	document.getElementById("openingOne").style.display = "none";
}


 function openMenuTwo(e){
     document.getElementById("openingTwo").innerHTML = "With $5.1 billion, or 19.5 percent of all exports, Africa holds the highest proportion of the mineral fuel market, which includes oil. Gems and precious metals are in second place with exports totaling $2.1 billion, or 8.2 percent of all exports. The price of gems and mineral fuels will be more affected if climate change occurs as it is predicted to get worse.The Food and Agriculture Organization claims that climate variability is responsible for 80% of the reasons why cereal crops in places like Africa's Sahel experience irregular harvests. A different challenge to food security is posed by increasing sea levels in places like Bangladesh and Vietnam. There, saltwater frequently inundated the coastal farmlands, killing the rice harvests. Even a little flood can have significant effects because the Mekong Delta, which is roughly the size of Maryland, is where half of Vietnam's country's rice production is concentrated. We need to find distinctive ways to lessen the effects of disasters when they strike and develop bespoke ways to reduce the impacts of hazards on the lives and livelihoods of these areas in the future, as the effects of climate change are already evident in places like the Horn of Africa and Southeast Asia.More than 10 million people were impacted by the drought-caused famine in the Horn of Africa in 2011, which cost over $1 billion in damages and resulted in 257,000 fatalities. According to the UN Environment Programme's most current Africa Adaptation Gap Report, climate change might cause a 20 percent decrease in sub-Saharan Africa's overall crop output by 2070. Even worse, it might start to impact Africa's trade potential. For instance, a sea level rise of 70 cm in Tanzania by 2070 may completely destroy Dar es Salaam, the country's largest, wealthiest city and a key player in trade in East Africa, and cost the nation $10 billion in property losses and damages. Environmentalists caution that severe flooding and land submersion could result from rising sea levels  and destroy coastal ecosystems.Once again this only the beginning if we don't try to prevent climate change to destroy this Earth.";
	document.getElementById("openingTwo").style.display = "block";
}
function closeMenuTwo(e){
	document.getElementById("openingTwo").style.display = "none";
}


function openMenuThree(e){
    document.getElementById("openingThree").innerHTML = "Brazil is essential to the worldwide effort to combat climate change because, according to USAID, the Amazon rainforest is one of the largest terrestrial carbon sinks in the world, taking more greenhouse gases (GHG) from the atmosphere than it produces. According to Britannica, as well It also exports large quantities of steel, cars, electronics, and consumer products. It is the world's top producer of a variety of minerals, including iron ore, tin, bauxite (the ore of aluminum), manganese, gold, quartz, and diamonds and other gems. Nevertheless, Between 2014 and 2016, as poverty rose from 17.7 percent to 20.1 percent, more than 5.6 million Brazilians fell below the poverty line (defined as earning less than $5.50 per day in 2011 PPP values). Over 2.5 million more people than in 2010 PPP now live on less than $1.90 per day, bringing the total to over 8 million. The Amazon forest has a significant impact on the global climate. It is the most significant greenhouse gas captured from the atmosphere and stored. Water is transpired, resulting in clouds that spread moisture across the globe. It supports biological functions and harbors a large portion of the world's biodiversity. The Amazon being destroyed is causing the whole world to be off balance. Cattle and soy are the primary causes of deforestation. Right now, Brazil is the world's top soy exporter. Other important exports include coffee, sugar, and orange juice. Brazil has considerably improved the road network in the Amazon so that soy can be transported to ports on the Amazon River in order to export it. The pressure to further expand ranching and land speculation have both intensified as a result of this road infrastructure. This has been somewhat impacted by the Sino-American trade war. U.S. soy shipments to China have decreased as a result of the trade disputes with the United States. Brazilian soy exports to China have consequently increased dramatically since 2017. If patterns in the Amazon forest keep continuing, this can have such a global negative effect, and we are not just talking economically.";
	document.getElementById("openingThree").style.display = "block";
}
function closeMenuThree(e){
	document.getElementById("openingThree").style.display = "none";
}


/* code for 3by3 image */
function openMenuFour(e){
  document.getElementById("openingFour").innerHTML = "While the global food system is a key contributor to greenhouse gas emissions, some agriculture experts contend that the solutions to climate change can be found through revolutionizing the way we farm...";

	document.getElementById("openingFour").style.display = "block";
}
function closeMenuFour(e){
	document.getElementById("openingFour").style.display = "none";
}



function openMenu5(e){
  document.getElementById("opening5").innerHTML = "Ahead of World Environment Day, WFP's Innovation Accelerator shows how it helps one award-winning team to fight climate change and create a greener world."; 
	document.getElementById("opening5").style.display = "block";
}
function closeMenu5(e){
	document.getElementById("opening5").style.display = "none";
}


function openMenu6(e){
  document.getElementById("opening6").innerHTML = "A key factor in tackling the climate crisis involves the widespread development and use of climate technologies, with technical and financial support for developing countries. The UN Climate Change secretariat, together with the UN Environment Programme (UNEP) and the UNEP DTU Partnership, has just released a new brochure containing success stories covering concrete examples of the latest climate technology action on the ground in different regions, countries and sectors.";   
	document.getElementById("opening6").style.display = "block";
}
function closeMenu6(e){
	document.getElementById("opening6").style.display = "none";
}


function openMenu7(e){
  document.getElementById("opening7").innerHTML = "We commit to continuing to innovate, and ask that policymakers foster such creativity by recognizing that climate change, health and development are in fact inseparable. Future climate policy must be shaped in a way that rewards gains for both.";    
	document.getElementById("opening7").style.display = "block";
}
function closeMenu7(e){
	document.getElementById("opening7").style.display = "none";
}


function openMenu8(e){
  document.getElementById("opening8").innerHTML = "The enormity of global warming can be daunting and dispiriting. What can one person, or even one nation, do on their own to slow and reverse climate change? But just as ecologist Stephen Pacala and physicist Robert Socolow, both at Princeton University, came up with 15 so-called wedges for nations to utilize toward this goal—each of which is challenging but feasible and, in some combination, could reduce greenhouse gas emissions to safer levels—there are personal lifestyle changes that you can make too that, in some combination, can help reduce your carbon impact. Not all are right for everybody. Some you may already be doing or absolutely abhor. But implementing just a few of them could make a difference.";    
	document.getElementById("opening8").style.display = "block";
}
function closeMenu8(e){
	document.getElementById("opening8").style.display = "none";
}


function openMenu9(e){
  document.getElementById("opening9").innerHTML = "The history of human invention has not always been kind to the environment.Cars and coal factories have partly driven climate change. Early air conditioners tore a massive hole in the ozone layer. Pesticides have destroyed ecosystems and harmed wildlife. And now plastic is choking the oceans.But some inventions rehabilitate, protect, and rejuvenate the Earth.These inventions have become all the more necessary as the planet faces a range of existential threats from climate change to deforestation to ocean acidification, and more.";    
	document.getElementById("opening9").style.display = "block";
}
function closeMenu9(e){
	document.getElementById("opening9").style.display = "none";
}


function openMenu10(e){
  document.getElementById("opening10").innerHTML = "Where companies and governments should place bets for the clean energy technologies of the future.The world now has many of the tools needed to keep climate change in check, the United Nations’ climate research team reported last month. But humanity will still need to invent newer and better ones too.The question is what kinds of research governments and companies should invest in.";   
	document.getElementById("opening10").style.display = "block";
}
function closeMenu10(e){
	document.getElementById("opening10").style.display = "none";
}


function openMenu11(e){
  document.getElementById("opening11").innerHTML = "Getting to the root of poverty means solving various issues along the way, and inventors are up for the challenge.Poverty isn't just inadequate access to income -- it manifests in a lack of access to health services, education and vital goods. It can also lead to societal instability, allowing sexism, ableism, classism and racism to flourish. And every day, innovators create new gadgets and other solutions with the world's poor in mind.";   
	document.getElementById("opening11").style.display = "block";
}
function closeMenu11(e){
	document.getElementById("opening11").style.display = "none";
}


  function openMenu12(e){
  document.getElementById("opening12").innerHTML = "The most cost-effective climate change actions are also those that could help us achieve sustainable development goals (SDGs) such as ending poverty and hunger, according to Dr Keywan Riahi, director of the energy program of the International Institute Applied Systems Analysis (IIASA) in Austria, who says the first step should be to cut our energy demand.";  
	document.getElementById("opening12").style.display = "block";
}
function closeMenu12(e){
	document.getElementById("opening12").style.display = "none";
}
// the end of btn codes for the 3byb collage//

