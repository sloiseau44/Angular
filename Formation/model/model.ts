export class Personne{
    constructor(public prenom:string,
                public nom:string,
                public genre:Genre,
                protected religion?:Religion){};

    boire(b:Boisson):void {
        console.log(b.nom, " alcool ",b.asAlcool, " bio ", b.isBio);
    };

    toString():void {
        console.log(this.prenom, this.nom);
    };

}

export enum Genre{
    Homme = "Homme",
    Femme = "Femme"
}

export enum Religion{
    Buddhism = "Buddhism",
    Judaism = "Judaism",
    Islam = "Islam",
    Catholicism = "Catholicism",
    Atheist = "Atheist"
}

export class Boisson{
    constructor(public nom:string,
                public asAlcool:boolean,
                public isBio:boolean){};

}

export class Formateur extends Personne{
    constructor(private connaissances:Connaissance[],
                public prenom:string,
                public nom:string,
                public genre:Genre,
                public religion:Religion
                ){super(prenom, nom, genre, religion)};

    enseigne():Connaissance[]{
        let connaissances:Connaissance[] = [];
        this.connaissances.map((c:Connaissance)=>{if(c.experience>2)connaissances.push(c)});
        return connaissances;
    }
}

export class Connaissance {
    constructor(public nom:string,
                public experience:number){};
}

export class Stagiaire extends Personne{
    constructor(public prenom:string,
                public nom:string,
                public genre:Genre,
                public religion:Religion,
                public certifications:Certification[]
                ){super(prenom, nom, genre, religion)};
}

export class Certification{
    constructor(public nom:string,
               public annee:number){}
}

export class Formation{
    constructor(public nom:string,
                public dateDebut:string,
                public dateFin:string,
                public stagiaires:Stagiaire[],
                public formateurs:Formateur[]){}
}