<template>
<div>
  <div class="container-full-bg kleurtje">
    <div class="container mx-auto d-block">
      <div class="row">
      <div class="text-center">
        <img class="center-block" src="https://vuestoragestatictof.blob.core.windows.net/pics/huis4eBiggetje.png" alt="weg.." style="width:100%">
      </div>
      </div>
    </div>
  </div>
  
   <div id="grad1" class="container f20w400">
    <h1>Het 4<sup>e</sup> biggetje</h1>
    <p>De vier biggetjes</p>
    <p class="ex1">Vier biggetjes bouwden een huis.</p>
    <p class="ex1">De eerste bouwde een huis van stro, de tweede een huis van hout, de derde een huis van steen.</p>

    <p class="ex1">Het derde biggetje stortte eerst beton. Dat moest weken drogen. Daarna ging hij metselen, etc.</p>
    <p>Toen het huismaanden later klaar was, kwam hij erachter dat - ondanks een uitgebreide planning - toch wat zaken fout had ingeschat. Hij was achteraf niet blij met de indeling en hij had er niet aan gedacht om zijn tuingerichte woonkamer aan de zuidkant te bouwen.</p>

    <p class="ex1">Het vierde biggetje bouwde een huis van stro. Dat deed zij in één dag. Toen ging ze zich wijden haar grote hobby: koken.</p>
    <p class="ex1">Zij nodigde de wolf uit (die had naar eigen zeggen altijd honger) en daar zaten ze dan, samen te genieten van een heerlijke maaltijd.</p>

    <p>Na de maaltijd leunde de wolf achterover in de keukenstoel en keek 'ns kritisch om zich heen.</p>
    <p><img src="@/assets/wolft.png" alt="weg?"></p>        
    <h3 style="color: #d6e0c8">"Als je zo van koken houdt, waarom heb je dan zo'n kleine keuken en zo'n enorme hal en woonkamer?"</h3>
    <p class="ex1">"Geeft niks", zei het vierde biggetje. "Ik heb bij nader inzien wel meer zaken fout gedaan.</p>
    <p class="ex1">Morgen begin ik aan een huis van hout en ik verwacht dat ik na een tijdje de achterwand ga vervangen door steen. Maar misschien wil ik het straks wel zo laten."</p>
    <hr color = "#d6e0c8">
  </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      reRenderKey: 0,
    };
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>
#grad1 {
  background-image: linear-gradient(#f7deb0, #8b5d2e);
}
.kleurtje{
  background-color:#37372e;
}
p.ex1 {
  margin-bottom: 0px;
}
</style>
