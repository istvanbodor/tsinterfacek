

//interface = definiál metódusokat, függvényeket amit az implementáló osztálynak
//tartalmaznia kell, ha tartalmazza tudjuk őket együtt kezelni más más tulajdonságokkal is.


interface Multimedia {
    cim : string;
    
    //Kiirja a konzolra a mm. termék leírását
    kiir() : void;
    toString() : string;
}


//js/ts-ben meg lehet adni az interfacenek egy implementálandó változót is. Java/C#-ben nem, ott csak fuggvenyek/metódusok.
//lehet siman megadni a valtozot vagy getter/setterekkel is.
class Zene implements Multimedia {
    cim: string;
    hossz: number;

    constructor(cim: string, hossz : number) {
        this.cim = cim;
        this.hossz = hossz;
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        
        return this.cim + " (" +this.hossz + "s)";
    }

}

class Konyv implements Multimedia {
    #cim: string;

    get cim()
    {return this.#cim}

    set cim(cim :string)
    {
        this.#cim = cim;
    }

    constructor(cim: string) {
        this.#cim = cim;
        
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        
        return this.#cim;
    }

}

class Film {
    cim : string;
    hossz : number;

    constructor(cim: string, hossz : number) {
        this.cim = cim;
        this.hossz = hossz;
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        
        return this.cim + " (" +this.hossz + "s)";
    }


}


let f : Multimedia = new Film('Die hard', 24040);


let termekek: Multimedia[] = [
    new Zene('Let it go', 183),
    new Konyv('The Lord of the Rings'),
    new Film('Die hard', 24040),
];


//let zene = new Zene("Let it go", 183);
//zene.kiir();

for (let termek of termekek)
{
    termek.kiir();
}






/*interface Streamelheto {
    cim: string;
    hossz : number;
}*/

//type = majdnem 100% szinoníma interface-re.

type Streamelheto = {
    cim: string;
    hossz : number;
}

type AlapTipus = number | boolean | string;

let streamelhetoTermekek: Streamelheto[] = [
    new Film('Harry potter', 2000),
    new Zene('Sweet child of mine', 200),
    {cim : 'Thunderstruck', hossz: 198},
];
