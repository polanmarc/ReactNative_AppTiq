import React, { useState, useEffect } from 'react';

interface PropGetTiqs {
    tiqId : number
}

export const GetTiqsForId = ({ tiqId } : PropGetTiqs) => {
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