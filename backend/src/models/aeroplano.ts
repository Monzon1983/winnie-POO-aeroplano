// Jerarquía
abstract class Propulsor {
    constructor(public cantidad: number) {}
    abstract getDetails(): string;
}

export class Helice extends Propulsor {
    getDetails(): string { return `${this.cantidad} hélice/s`; }
}

// Componentes para Agregación
export class Alas {
    constructor(public cantidad: number) {}
}

// Componentes para Composición (Se crean dentro del Aeroplano)
class TrendeAterrizaje {
    constructor(public tipo: string) {}
}

class Cubierta {
    constructor(public material: string) {}
}

export class Aeroplano {
    public id: number;
    private propulsion: Propulsor; // Agregación
    private alas: Alas;           // Agregación
    private tren: TrendeAterrizaje; // COMPOSICIÓN 1
    private cubierta: Cubierta;     // COMPOSICIÓN 2

    constructor(id: number, p: Propulsor, a: Alas) {
        this.id = id;
        this.propulsion = p;
        this.alas = a;
        // El ciclo de vida de estos objetos depende de Aeroplano
        this.tren = new TrendeAterrizaje("Hidráulico");
        this.cubierta = new Cubierta("Aluminio reforzado");
    }

    public getInfo() {
        return {
            id: this.id,
            motor: this.propulsion.getDetails(),
            alas: this.alas.cantidad,
            estado: "Listo para despegue"
        };
    }
}