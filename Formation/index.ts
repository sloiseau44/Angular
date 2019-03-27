import {Boisson, Certification, Connaissance, Formateur, Genre, Religion, Stagiaire, Formation} from "./model/model";

export function nouvelleFormation (){
    let stagiaire1 = new Stagiaire("Jean","Claude", Genre.Homme,Religion.Buddhism, [new Certification("java8", 7), new Certification("bloc-note", 36)]);
    let stagiaire2 = new Stagiaire("Jean","Jaqueline", Genre.Femme,Religion.Judaism, [new Certification("java8", 7)]);

    stagiaire1.boire(new Boisson("Whyskry", true, true));
    stagiaire2.toString();

    let formateur = new Formateur([new Connaissance("Java8", 15), new Connaissance("bloc-note", 58), new Connaissance("Tipiac", 1)], "Jean", "Régis", Genre.Homme, Religion.Atheist);

    console.log(formateur.enseigne());

    let formation = new Formation("Java","28/08", "29/08", [stagiaire2, stagiaire1], [formateur]);

    console.log(formation);
}

nouvelleFormation();