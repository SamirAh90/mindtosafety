# Ändringsjournal – Mind to Safety

Journalen dokumenterar genomförda ändringar och deras status. Nya poster läggs överst. Datum och tider anges i svensk tid (Europe/Stockholm).

## 2026-11-27 – Ändringar per del av hemsidan

### Startsidan

- **Överst på sidan:** Bytt introduktionen till Johans text om erfarenheten från polisen och hur han hjälper verksamheter att förebygga hot och våld. Lagt till hans namn och tagit bort raden om utbildning och rådgivning under knapparna.
- **Vår utgångspunkt:** Ändrat rubriken till ”Förberedelse slår improvisation” och ersatt texten med den nya formuleringen om rutiner, mental förberedelse och trygghet i arbetslaget.
- **Före – Under – Efter:** Tagit bort hela avsnittet.
- **Vad vi erbjuder:** Ersatt introduktionen med ”Ingen verksamhet är den andra lik…” och texten om att utbildningarna utgår från kundens behov, lokaler och förutsättningar.
- **Människan bakom kompetensen:** Lagt in rubriken ”En låst dörr kan köpa minuter. Minuter räddar liv.” och den nya presentationen av Johans erfarenheter. Bytt citatet under presentationen till ”Trygghet bygger vi när människor vet vad de ska göra innan situationen blir otrygg.”
- **Tidigare uppdragsgivare:** Tagit bort listan i väntan på avstämning och eventuella kundcitat.
- **Kontaktavsnittet:** Ändrat rubriken till ”Hur kan vi stärka er trygghet?”.

### Utbildningar och insatser

- **PDV-utbildning:** Lagt in den nya texten om de första avgörande minuterna, Johans erfarenhet och övningar i kundens lokaler. Uppdaterat innehåll och upplägg. Bytt bilden till den valda bilden av en person som springer i en trappa.
- **Säkerhetsvandring:** Lagt till ”Vi ser era lokaler med andra ögon.” och den nya texten om att upptäcka svagheter, föreslå enkla åtgärder och genomföra vandringen tillsammans med personalen.
- **Hotfullt och rättshaveristiskt beteende:** Lagt till ”Lugnet smittar. Det gör stressen också.” och den nya texten om bemötande, gränser och träning på vardagssituationer. Bytt till den önskade svartvita samtalsbilden.
- **Hot och våld:** Ersatt beskrivningen med de tre nya styckena om olika yrkesrisker, Johans erfarenhet och praktiska övningar där kunden arbetar.
- **Krisledning:** Lagt till ”När krisen kommer finns ingen tid att läsa planen.” och den nya texten om erfarenhet, beslut under tidspress och övningar med kundens egen krisorganisation.
- **Workshop om radikalisering:** Lagt till ”Oro ska inte stanna i korridoren.” och den nya texten om tidiga signaler, samverkan, sekretess och tydliga rutiner.
- **Utmana ert arbetslag:** Tagit bort hela utbildningen, bilden och alla länkar till den.
- **Numrering:** Rättat tjänstesidan till 01–07 och startsidans tre utvalda utbildningar till 01–03.

### Om oss

- Ersatt Johans presentation med samma nya rubrik och text som på startsidan.
- Tagit bort märkningen ”Medgrundare” vid porträttet på både ”Om oss” och startsidan.
- Tagit bort listan med tidigare uppdragsgivare även här.

### Logotypen

- Gjort emblemet mindre och anpassat företagstextens typsnitt och färger till resten av hemsidan.

### Städning och publicering

- Rensat tillfälliga förhandsvisningar och bildkopior samt tagit bort bilden till den borttagna utbildningen ”Utmana ert arbetslag”.
- Kontrollerat att alla kvarvarande bilder används och att hemsidans länkar fungerar.

**Status:** Ändringarna är pushade till GitHub. Hemsidans automatiska publicering behövde rättas och körs igen.

## 2026-11-27 – Rättade den automatiska publiceringen

- Samtliga webbplatsändringar och filrensningen pushades till GitHub i commit `8a3835e`.
- Första publiceringen stannade när GitHub inte hittade det nyss uppladdade webbpaketet. Vid omkörningen hittades i stället två paket med samma namn.
- Delade därför upp uppladdning och publicering i två beroende steg och gav webbpaketen unika namn för varje körningsförsök.
- Lade till den identitetsbehörighet som GitHub Pages kräver för publicering. Behörigheterna är begränsade till publiceringsjobbet.

**Berörda filer:** `.github/workflows/static.yml` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade felloggarna och GitHubs dokumentation för publiceringssteget. Kontrollerade att publiceringen använder samma paketnamn som uppladdningen och inväntar den.

**Status:** Rättningen förberedd för push och en ny publiceringskörning.

## 2026-11-27 – Förberedde GitHub-publicering och rensade arbetsfiler

- Förberedde samtliga godkända text-, bild- och layoutändringar för publicering till projektets befintliga GitHub-repository.
- Rensade den tillfälliga förhandsvisningsmappen med webbläsarprofiler, skärmbilder och bildkopior. Ändringsjournalen och samtliga bilder som används på hemsidan behölls.
- Tog bort den oanvända formateringen för den redan strukna raden under startsidans knappar.
- Uppdaterade projektbeskrivningen så att den beskriver de sju kvarvarande tjänsterna, den aktuella kontaktlösningen och hur journalen används.
- De tidigare lokala borttagningarna av `.nojekyll`, projektets `AGENTS.md` och `robots.txt` ingår i den uppdatering användaren har bett att pusha. Instruktionen om journalföring finns kvar i arbetsytans överordnade `AGENTS.md`.

**Berörda filer:** `README.md`, `styles.css`, `ANDRINGSJOURNAL.md` och tidigare dokumenterade webbplatsändringar. Tillfälliga filer i `../mindtosafety-preview/` rensades.

**Kontroll:** Kontrollerade 151 lokala sid-, ankar-, skript-, stil- och bildreferenser utan fel. Alla kvarvarande bilder används. Kontrollerade att GitHub och den lokala huvudgrenen hade samma utgångsläge före publiceringen.

**Status:** Webbplatsändringarna är pushade i commit `8a3835e`. De första två publiceringsförsöken misslyckades; rättningen och resultatet dokumenteras i senare poster ovan.

## 2026-11-27 – Tog bort Utmana ert arbetslag och rättade numreringen

**Önskemål:** Ta bort hela tjänsten ”Utmana ert arbetslag – tillit och trygghet i teamet” och rätta all numrering.

- Tog bort tjänstesidans hela avsnitt `#arbetslag`, inklusive bild, beskrivning, innehåll, upplägg och kontaktknapp.
- Tog bort tjänstens länk från startsidans lista över fler utbildningar och från sidfoten på samtliga fem sidor.
- Tog bort den oanvända bildfilen `assets/Utmana ert arbetslag.jpg`.
- Numrerade tjänstesidans sju kvarvarande avsnitt löpande 01–07. Säkerhetsrådgivning vid nybyggnation ändrades från 08 till 07.
- Numrerade startsidans tre utvalda tjänstekort löpande 01–03. Kortet ”Hot och våld” ändrades där från 04 till 03. Tjänstesidans fullständiga lista och startsidans urval har var sin löpande numrering.
- Ändrade tjänstesidans metabeskrivning från ”Åtta anpassade utbildningar och insatser” till ”Sju anpassade utbildningar och insatser”.

**Berörda filer:** `index.html`, `om-oss/index.html`, `tjanster/index.html`, `kontakt/index.html`, `integritet/index.html`, `assets/Utmana ert arbetslag.jpg` (borttagen) och `ANDRINGSJOURNAL.md`.

**Kontroll:** Kontrollerade att avsnittet och länkarna är borttagna, att bildfilen inte längre används och att båda listorna är löpande numrerade. Kontrollerade webbplatsens interna sid- och ankarlänkar. `git diff --check` godkändes för samtliga fem HTML-filer.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad Om oss-presentation och borttagen medgrundarmärkning

**Önskemål:** Uppdatera presentationen under ”Människan bakom kompetensen” på sidan ”Om oss” och ta bort ”Medgrundare” enligt bildmarkeringen.

- Ersatte ”Om oss”-avsnittets rubrik ”Johan Leopoldsson” med ”En låst dörr kan köpa minuter. Minuter räddar liv.”.
- Ersatte den tidigare presentationen i jagform med användarens fyra stycken i tredje person om Johans erfarenheter från insatspolisen och säkerhetsarbete i kommun och på högskola.
- Presentationen är nu identisk med den redan uppdaterade presentationen på startsidan och avslutas med ”Han vet hur det ser ut både när larmet går och en vanlig tisdag.”.
- Tog bort den synliga märkningen ”Medgrundare” vid porträttet på både startsidan och ”Om oss”.
- Tog också bort medgrundarbenämningen från porträttens alternativtexter och panelernas tillgängliga etiketter på båda sidorna. De anger nu ”Johan Leopoldsson, Mind to Safety”.

**Berörda filer:** `index.html`, `om-oss/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Kontrollerade att presentationerna är identiska och att ”medgrundare” inte finns kvar i HTML-filerna. `git diff --check` godkändes för startsidan och sidan ”Om oss”.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad workshop om radikalisering och våldsbejakande extremism

**Önskemål:** Uppdatera workshopbeskrivningen med användarens ingress och fyra textstycken.

- Lade till den fetstilta ingressen ”Oro ska inte stanna i korridoren.” under rubriken ”Workshop: radikalisering och våldsbejakande extremism”.
- Ersatte de två tidigare beskrivningsstyckena med fyra stycken om osäkerheten när man ser tidiga förändringar, erfarenheten av förebyggande kommunal samverkan med skola, socialtjänst och polis, risk- och skyddsfaktorer, radikalisering även på nätet samt hur oro hanteras.
- Den nya texten tar upp ansvar, sekretess och samarbete samt verksamhetsanpassning och verkliga, avidentifierade fall.
- Avslutningen är nu: ”Workshoppen anpassas efter er verksamhet och bygger på verkliga, avidentifierade fall. Ni går därifrån med tydliga rutiner och vet vem ni ska vända er till.”
- Behöll rubrik, bild, innehållslista, uppläggstext, kontaktlänk och ankaret `#radikalisering`.

**Berörda filer:** `tjanster/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade ingress och fyra textstycken mot användarens formulering. `git diff --check` godkändes för tjänstesidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad beskrivning av krisledning

**Önskemål:** Uppdatera ”Krisledning – utbildning och övning” med användarens nya ingress och fyra textstycken.

- Lade till den fetstilta ingressen ”När krisen kommer finns ingen tid att läsa planen.” under avsnittets rubrik.
- Ersatte de två tidigare beskrivningsstyckena med fyra stycken om att kunna använda krisplanen, fokusera på uppgiften, erfarenheten av akuta polisiära lägen och rollen som tjänsteman i beredskap samt krisberedskap och krisledning i kommun och på högskola.
- Den nya texten beskriver träning med verksamhetens egen krisorganisation och egna planer, beslut under tidspress, kommunikation, samverkan och anpassning efter nuvarande nivå.
- Avslutningen beskriver hur utbildningen kan kombineras med en övning som stärker deltagarna och visar vad som fungerar respektive behöver utvecklas.
- Behöll rubrik, bild, innehållslista, uppläggstext, kontaktlänk och ankaret `#krisledning`.

**Berörda filer:** `tjanster/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade ingress och fyra textstycken mot användarens formulering. `git diff --check` godkändes för tjänstesidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad beskrivning av Hot och våld

**Önskemål:** Ersätt utbildningsbeskrivningen med användarens tre textstycken.

- Ersatte de två tidigare styckena under ”Hot och våld – anpassat efter er verksamhet” med tre nya stycken.
- Första stycket beskriver skilda risker för en undersköterska vid ensamma hembesök, en nattreceptionist och den som transporterar en person som kan bli hotfull, samt hur utbildningen skräddarsys efter verksamhetens arbetsmoment.
- Andra stycket beskriver erfarenheten av hot och våld i polisen och senare säkerhetsarbete kring hemtjänst, ensamarbete och persontransporter.
- Tredje stycket beskriver förberedande samtal, verksamhetsnära scenarier, teori om lagstiftning och mental förberedelse samt praktiska övningar där deltagarna arbetar.
- Behöll rubrik, bild, målgruppslista, uppläggstext, kontaktlänk och ankaret `#hot-och-vald`.

**Berörda filer:** `tjanster/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade samtliga tre textstycken mot användarens formulering. `git diff --check` godkändes för tjänstesidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Bytte bild för hotfullt och rättshaveristiskt beteende

**Önskemål:** Användaren förtydligade att bilden ska ersättas med den bifogade svartvita bilden av en man och en kvinna i samtal.

- Jämförde den nuvarande bildfilen med underlaget och konstaterade att den visade en annan bild.
- Hittade den svartvita bilden som matchar underlaget i projektets tidigare version, commit `c0c6dbc05b2d12c1cbc23cc2090a13a03aa3ce66`.
- Ersatte `assets/conflict-management.jpg` med den tidigare bildfilen, 1024 × 688 px.
- Den befintliga bildreferensen använder samma filnamn och dimensioner. Den uppdaterade utbildningstexten från föregående journalpost behölls.

**Berörda filer:** `assets/conflict-management.jpg` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade bilden visuellt mot användarens bilaga, kontrollerade dimensionerna och verifierade med SHA-256 att den sparade bilden är identisk med den återfunna originalfilen.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad text om hotfullt och rättshaveristiskt beteende

**Önskemål:** Uppdatera utbildningsbeskrivningen enligt användarens text och behålla den befintliga bilden.

- Lade till den fetstilta ingressen ”Lugnet smittar. Det gör stressen också.” under rubriken ”Hotfullt och rättshaveristiskt beteende”.
- Ersatte de två tidigare beskrivningsstyckena med användarens fyra stycken om orimliga krav och hot, Johans erfarenhet som polis, hur det egna bemötandet kan lugna eller trappa upp en situation, tydliga gränser, förberedelse av svåra möten och lagstiftning.
- Avslutningen är nu: ”Vi övar på situationer från er egen vardag, så att ni känner er trygga nästa gång det händer.”
- Behöll `assets/conflict-management.jpg`, bildreferensen, innehållslistan, uppläggstexten, kontaktlänken och ankaret `#bemotande`.

**Berörda filer:** `tjanster/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade ingress och fyra textstycken mot underlaget. Kontrollerade med SHA-256 att bildfilen är oförändrad. `git diff --check` godkändes för tjänstesidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad beskrivning av säkerhetsvandring

**Önskemål:** Uppdatera avsnittet ”Säkerhetsvandring – analys av fastighet och rutiner” enligt användarens text och bildmarkeringar.

- Lade till den fetstilta ingressen ”Vi ser era lokaler med andra ögon.” under avsnittets rubrik.
- Ersatte de två tidigare beskrivningsstyckena med användarens fyra stycken om erfarenheten av att ta sig in i låsta byggnader, enkla och billiga skyddsåtgärder, genomgången tillsammans med personalen samt återkoppling på plats och en skriftlig sammanställning med prioriterade åtgärder.
- Den nya texten tar särskilt upp dörrar på glänt, öppna entréer och glasdörrar, samt att kunskapen stannar hos personalen när de deltar i vandringen.
- Behöll rubriken, bilden, innehållslistan, uppläggstexten, kontaktlänken och ankaret `#sakerhetsvandring`.

**Berörda filer:** `tjanster/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade ingressen och de fyra textstyckena mot användarens underlag. `git diff --check` godkändes för tjänstesidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Ny PDV-bild och uppdaterad utbildningsbeskrivning

**Önskemål:** Ladda ner användarens valda Pexels-bild, ersätta den befintliga PDV-bilden i mappen och uppdatera utbildningens text, innehåll och upplägg enligt underlaget.

- Laddade ner ”Dynamic Motion Blur of Man Running on Stairs” av Noe Garde från [Pexels](https://www.pexels.com/photo/dynamic-motion-blur-of-man-running-on-stairs-36492599/).
- Ersatte `assets/pdv-training.jpg` med den nedladdade originalbilden i JPEG-format, 3867 × 5801 px, 2 070 188 byte. Filnamnet behölls så att både startsidans PDV-kort och tjänstesidans PDV-avsnitt använder den nya bilden.
- Uppdaterade båda bildreferensernas bredd, höjd och alternativtext. Ny alternativtext: ”Person som springer i en trappa, fotograferad med rörelseoskärpa”.
- Ändrade etiketten i tjänstesidans PDV-avsnitt till ”PDV-utbildning” och rubriken till ”En låst dörr kan köpa minuter. Minuter räddar liv.”.
- Ersatte de två tidigare beskrivningsstyckena med användarens fyra stycken: de avgörande första sekunderna och minuterna, Johans erfarenhet och PDV-utbildning som insatspolis, utbildningens teoretiska moment och praktiska övningar i verksamhetens egna lokaler.
- Innehållslistan är nu: Fly – Sök skydd – Larma; Mental förberedelse; Nödvärn; Stoppa livshotande blödning; Praktiska övningar i era lokaler.
- Upplägget är nu: ”Föreläsning ca 2 timmar, eller halv- eller heldag med övningar. Kombineras gärna med en säkerhetsvandring.”
- Behöll avsnittets ankare `#pdv`, kontaktlänken och den befintliga bildvisningen i formatet 3:2.

**Berörda filer:** `assets/pdv-training.jpg`, `index.html`, `tjanster/index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Öppnade och granskade den nedladdade bilden, kontrollerade bildfilens faktiska dimensioner och granskade den uppdaterade HTML-texten och de båda bildreferenserna. `git diff --check` godkändes för startsidan och tjänstesidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Tog bort uppdragsgivarlistor och ändrade kontaktrubriken

**Önskemål:** Ta bort listan över tidigare uppdragsgivare för att invänta avstämning med dem och eventuellt ersätta listan med citat senare. Ändra kontaktrubriken enligt bilden.

- Tog bort hela avsnittet ”Vi har arbetat med”, inklusive organisationsnamnen, från både startsidan och sidan ”Om oss”. Samma uppdragsgivarlista förekom på båda sidorna.
- Tog bort avsnittens oanvända CSS-regler för `.client-band`, `.client-heading` och `.client-list`, inklusive mobilreglerna.
- Ändrade startsidans kontaktrubrik från ”Hur kan vi göra er tryggare?” till ”Hur kan vi stärka er trygghet?”.
- Kontaktrubriken på ”Om oss” och tjänstesidan hade redan den önskade formuleringen.

**Berörda filer:** `index.html`, `om-oss/index.html`, `styles.css` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Sökte igenom HTML-, CSS- och JavaScript-filerna för att kontrollera att listorna och hänvisningarna till deras klasser och ID är borttagna. Kontrollerade kontaktrubriken och körde `git diff --check` på de ändrade webbplatsfilerna utan fel.

**Status:** Sparat lokalt. Inga nya kundcitat har lagts in. Ingen webbpublicering gjordes.

## 2026-11-27 – Ny inledning under Vad vi erbjuder

**Önskemål:** Ersätt avsnittets inledning enligt användarens text och bildmarkering.

- Ersatte de två tidigare inledningsstyckena med: ”Ingen verksamhet är den andra lik. En skola har andra utmaningar än hemtjänsten, och ett hotell har andra än en kommunal förvaltning. Därför utgår vi alltid från era behov, era lokaler och era förutsättningar, och inte från ett färdigt koncept.”
- Behöll rubriken ”Kunskap som blir handlingskraft.”, länken till alla utbildningar och avsnittets befintliga formatering.

**Berörda filer:** `index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade den sparade texten mot användarens formulering. `git diff --check` godkändes för startsidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Uppdaterad presentation av Johan och nytt citat

**Önskemål:** Ersätta startsidans presentation under ”Människan bakom kompetensen” och citatet under den, enligt användarens text och bildmarkeringar.

- Ersatte rubriken ”Vi vet vad som är viktigt när det verkligen gäller.” med ”En låst dörr kan köpa minuter. Minuter räddar liv.”.
- Ersatte den tidigare presentationen i jagform med användarens fyra stycken om Johan i tredje person. Texten beskriver hans erfarenhet som insatspolis, hur lokaler kan fördröja en gärningsman, hantering av hot och våld samt säkerhetsarbete i kommun och på högskola.
- Den nya presentationen omfattar också krisberedskap, krisledning, hemtjänst, ensamarbete, transporter och förebyggande samverkan mot radikalisering och våldsbejakande extremism.
- Presentationen avslutas med: ”Johan har alltså sett säkerhet från båda hållen: som den som kommer när det redan har gått fel, och som den som arbetar för att det aldrig ska hända. Han vet hur det ser ut både när larmet går och en vanlig tisdag.”
- Ersatte citatet ”Säkerhet handlar om människor – att de känner sig trygga och vet vad de kan göra, även när det blir otryggt.” med ”Trygghet bygger vi när människor vet vad de ska göra innan situationen blir otrygg.”.
- Behöll porträttet, medgrundarpresentationen, länken ”Läs mer om oss” och avsnittets befintliga formatering.

**Berörda filer:** `index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade rubrik, samtliga fyra textstycken och citat mot användarens underlag. `git diff --check` godkändes för startsidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Tog bort avsnittet Före – Under – Efter

**Önskemål:** Ta bort avsnittet från startsidan eftersom det enligt användaren inte ingår i presentationsunderlaget.

- Tog bort hela avsnittet ”Före – Under – Efter”, inklusive ingressen och de tre kolumnerna ”Förebygga och förbereda”, ”Agera i stunden” och ”Följa upp och lära”.
- Avsnittet ”Vad vi erbjuder” följer nu direkt efter ”Vår utgångspunkt”.
- Tog bort avsnittets oanvända CSS-regler för `.process-grid` och `.process-step`, inklusive hänvisningen i mobilregeln.

**Berörda filer:** `index.html`, `styles.css` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Kontrollerade att avsnittets ID, HTML-klasser och CSS-regler är borttagna och att omgivande avsnitt är sammanhängande. `git diff --check` godkändes för startsidan och stilmallen.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Ny rubrik och text under Vår utgångspunkt

**Önskemål:** Uppdatera avsnittet enligt användarens text och bildmarkeringar.

- Ersatte rubriken ”Trygghet börjar innan något händer.” med ”Förberedelse slår improvisation”.
- Ersatte första brödtextstycket med: ”När något händer finns ingen tid att tänka ut en plan. Då gör man det man har förberett, och det man har övat. Därför lägger vi fokus på det som görs innan: rutiner, mental förberedelse och trygghet i arbetslaget.”
- Ersatte andra brödtextstycket med: ”Vi börjar därför alltid med frågan: vad kan vi förebygga, och vad behöver ni för att känna er förberedda?”
- Behöll avsnittets befintliga layout, färger och avslutande rad ”Skarp erfarenhet av att göra farliga situationer trygga – nu för vi den vidare till er.”.

**Berörda filer:** `index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade den sparade HTML-texten mot underlaget. `git diff --check` godkändes för startsidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Ny ingress enligt bildens textmarkeringar

**Önskemål:** Användaren förtydligade med en bild vilken textändring som avsågs.

- Ersatte startsidans två inledande stycken med: ”Jag har arbetat i de farligaste situationerna som svensk polis hanterar.” och ”Med den erfarenheten hjälper jag er att förebygga hot och våld, och att känna er trygga i att ni vet vad ni ska göra när situationen blir otrygg.”
- Lade till avsändaren ”Johan Leopoldsson” under ingressen.
- Tog bort raden under knapparna: ”Utbildning och rådgivning av en tidigare polis från Polisens insatsstyrka i Stockholm.”, enligt markeringen ”Stryk detta”.
- Texten använder ingressens befintliga typsnitt, färg och responsiva formatering. Bildens röda markeringar tolkades som redigeringsanvisningar.

**Berörda filer:** `index.html` och `ANDRINGSJOURNAL.md`.

**Kontroll:** Granskade HTML-ändringen mot bildens formuleringar och kontrollerade att den strukna raden är borttagen. `git diff --check` godkändes för startsidan.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Återställd journalföring

- Journalen och arbetsytans `../AGENTS.md` togs tillfälligt bort efter att ”nej gå tillbaka” tolkades som att journalföringen skulle ångras.
- Efter användarens rättelse återställdes båda filerna med tidigare innehåll och denna komplettering.

**Kontroll:** Kontrollerade att filerna saknades före återställningen och finns efteråt.

**Status:** Sparat lokalt. Ingen webbpublicering gjordes.

## 2026-11-27 – Ändringsjournal och instruktion för fortsatt arbete

**Önskemål:** Alla ändringar ska sparas i en Markdown- eller textfil som journal.

- Skapade `ANDRINGSJOURNAL.md` och dokumenterade den aktuella logotypändringen samt tidigare verifierade uppdateringar.
- Skapade `../AGENTS.md` i arbetsytans rot med instruktion att uppdatera denna journal vid framtida ändringar i projektet.
- Den tidigare sammanställningen `ANDRINGAR_JAMFORELSE.txt` behålls som historiskt underlag.
- Befintliga lokala borttagningar av `.nojekyll`, projektets `AGENTS.md` och `robots.txt` fanns redan före arbetet med logotypen. De har inte utförts av assistenten i denna arbetsomgång.

**Kontroll:** Journalen har stämts av mot den lokala ändringslistan, tidigare verktygsresultat och den befintliga sammanställningen.

**Status:** Journalen och arbetsytans instruktion är sparade lokalt. Ingen webbpublicering gjordes i denna arbetsomgång.

## 2026-11-27 – Mindre emblem och enhetlig företagstext

**Önskemål:** Mindre företagsemblem, samma textstil som resten av hemsidan och exakt samma färgskala; mindre skarpt vitt och gult.

- Ersatte den inbakade företagstexten i bildlogotypen med riktig HTML-text: ”Mind to Safety”.
- Företagsnamnet använder nu sidans befintliga rubriktypsnitt, Cormorant Garamond, med Georgia och serif som reserv.
- Använde sidans befintliga färgvariabler: benvit `--text` (`#efeee8`) och guld `--gold` (`#c6a875`). Ordet ”to” visas i guld.
- Bevarade sköldens ursprungliga form genom att visa emblemdelen av `assets/Logo.jpg` som en CSS-mask. Originalbilden har inte redigerats.
- Minskade emblemets visningsyta till 48 × 58 px på dator och 40 × 48 px på mobil.
- Anpassade företagstexten till 30 px på dator och 25 px på mobil, med avstånd mellan emblem och namn.
- Genomförde ändringen i både sidhuvud och sidfot på samtliga fem sidor. Logotypens länk till startsidan och dess tillgängliga namn behölls.

**Berörda filer:**

- `styles.css`
- `index.html`
- `om-oss/index.html`
- `tjanster/index.html`
- `kontakt/index.html`
- `integritet/index.html`

**Kontroller:**

- `git diff --check` godkändes för de sex ändrade filerna.
- Utseendet kontrollerades i Edge via en lokal webbserver i datorvy, 1440 × 1000 px, och mobilvy, 390 × 844 px.
- Mobilvyn hade ingen horisontell överströmning. Mobilmenyn öppnades och stängdes korrekt.
- Samtliga fem ursprungliga HTML-filer och stilmallen jämfördes med samma publika GitHub-version. HTML-ändringarna omfattar endast logotypens två element per sida; företags- och kontakttexterna är oförändrade.
- Förhandsvisningar sparades i `../mindtosafety-preview/desktop.png` och `../mindtosafety-preview/mobile.png`.

**Status:** Sparat lokalt. En GitHub-commit har förberetts (`692d205ad0aaa6908ec38c20aacd65e8ee38fb89`), men `main` har inte uppdaterats med den. Den automatiska godkännandekontrollen stoppade webbpubliceringen eftersom ett uttryckligt godkännande för publicering saknades. Ändringen är därför inte publicerad på den befintliga hemsidan.

## 2026-11-26 kl. 11.58 – Uppdaterade utbildnings- och tjänstebilder

Verifierad tidigare GitHub-ändring: `8b9708ea75ea0cf17aaadfa1a5a5a19d428055e1`, ”Update training and service images”.

**Berörda bildfiler:**

- `assets/Hot och våld.jpg`
- `assets/Krisledning – utbildning och övning.jpg`
- `assets/Säkerhetsrådgivning.jpg`
- `assets/Utmana ert arbetslag.jpg`
- `assets/Workshop.jpg`
- `assets/conflict-management.jpg`
- `assets/pdv-training.jpg`
- `assets/safety-analysis.jpg`

**Status:** GitHub Actions rapporterade lyckad publicering den 26 november 2026 kl. 11.58. Publiceringskörning: <https://github.com/SamirAh90/mindtosafety/actions/runs/45806269884>. Sidans utseende på den publika adressen kunde inte bekräftas vid kontrollen den 27 november.

## 2026-11-26 kl. 09.41 – Webbtexter från presentationsunderlag

Verifierad tidigare GitHub-ändring: `c0c6dbc05b2d12c1cbc23cc2090a13a03aa3ce66`, ”Update website copy from supplied presentation”.

**Ändring:** Webbtexterna uppdaterades utifrån det tillhandahållna presentationsunderlaget.

**Status:** Ändringen ingår i historiken före den lyckade publiceringen av bildändringarna den 26 november kl. 11.58.

## Historiskt underlag från 2026-11-24

`ANDRINGAR_JAMFORELSE.txt` innehåller en äldre, detaljerad jämförelse mot GitHub-versionen `28be972` (”page”). Den beskriver bland annat dåvarande bildlogotyp, utbyggd sidfot, kontaktuppgifter, webbtexter, tjänster och integritetssida. Beskrivningen gäller jämförelsen vid det tillfället; senare ändringar dokumenteras ovan.
