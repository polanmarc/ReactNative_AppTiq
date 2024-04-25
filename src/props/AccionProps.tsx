/**
 * Interfaz para las propiedades de la acción.
 * @interface AccionProps
 */
export interface AccionProps {
    accion: {
        id: number;
        idtiq: number;
        creador: number;
        asignado: number;
        descripcion: string;
        observaciones: string;
        tiempo: string;
        created_at: string;
        updated_at: string;
        interna: number;
        cliente: number;
        facturable: number;
        documentos: any[];
    }
}