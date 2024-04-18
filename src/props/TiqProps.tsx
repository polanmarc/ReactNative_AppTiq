export interface PropsTiq {
    tiq: {
        id: number;
        creador: number;
        asignado: number;
        inv_asignado: number | null;
        prioridad: number | null; // Puedes definir un tipo específico para prioridad si lo conoces
        tipotiq: number;
        clasificacion: string;
        descripcion: string;
        observaciones: string;
        fecha_final: string | null;
        estado: number;
        planificado: string | null;
        planificado2: string | null;
        created_at: string;
        updated_at: string;
        desplazamiento: any; // Puedes definir un tipo específico si lo conoces
        planificado_mysql: any; // Puedes definir un tipo específico si lo conoces
        planificado_hora: any; // Puedes definir un tipo específico si lo conoces
        prio: any; // Puedes definir un tipo específico si lo conoces
        selects: any[]; // Puedes definir un tipo específico si lo conoces
        tipo: {
            id: number;
            user_id: number;
            tipo: string;
            created_at: string;
            updated_at: string;
            not_cliente: number;
            estado: number;
            cruds: {
                id: number;
                tipocrud: number;
                descripcion: string;
                observaciones: string | null;
                personalizado: number;
                created_at: string;
                updated_at: string;
                pivot: {
                    idtipotiq: number;
                    idcrud: number;
                    obligatorio: number;
                    filtrable: number;
                    tablas: number;
                    acciones: number;
                    parametrizable: number;
                }
            }[];
        };
        acciones: any[]; // Puedes definir un tipo específico si lo conoces
        documentos: {
            id: number;
            idtiq: number;
            idaccion: number | null;
            descripcion: string | null;
            observaciones: string | null;
            nombre_original: string;
            nombre: string;
            extension: string;
            created_at: string;
            updated_at: string;
        }[];
        usuario_creador: {
            id: number;
            idrol: number;
            name: string;
            email: string;
            email_verified_at: string | null;
            foto: string;
            baja: number;
            ver_pendientes_facturar: number;
            avisosGenerales: number;
            created_at: string | null;
            updated_at: string;
            cliente: any; // Puedes definir un tipo específico si lo conoces
            observaciones: string | null;
            last_login: string;
            login_count: number;
        };
        usuario_asignado: {
            id: number;
            idrol: number;
            name: string;
            email: string;
            email_verified_at: string | null;
            foto: string;
            baja: number;
            ver_pendientes_facturar: number;
            avisosGenerales: number;
            created_at: string;
            updated_at: string;
            cliente: any; // Puedes definir un tipo específico si lo conoces
            observaciones: string | null;
            last_login: string;
            login_count: number;
        };
        etiquetas: {
            id: number;
            etiqueta: string;
            descripcion: string;
            created_at: string;
            updated_at: string;
            pivot: {
                idtiq: number;
                idetiqueta: number;
            };
        }[];
        subetiquetas: any[]; // Puedes definir un tipo específico si lo conoces
    }
}