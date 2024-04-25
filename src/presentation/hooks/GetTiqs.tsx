import React, { useState, useEffect } from 'react';

/**
 * Propiedades para obtener tiquets según un ID.
 */
interface PropGetTiqs {
    tiqId: number; // El ID para obtener los tiquets.
}

/**
 * Hook personalizado para obtener tiquets según un ID.
 * @param {PropGetTiqs} tiqId El ID para obtener los tiquets.
 * @returns {any} Los datos de los tiquets.
 */
export const GetTiqsForId = ({ tiqId }: PropGetTiqs) => {
    const [ticketData, setTicketData] = useState<any>(null);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('https://tiq.cat/api/tiquets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: tiqId })
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los datos del ticket');
                }

                const data = await response.json();
                setTicketData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchTickets();
    }, [tiqId]);

    return ticketData;
};
