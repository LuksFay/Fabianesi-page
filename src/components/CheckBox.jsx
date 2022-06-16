import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { CardAllItems } from './items/CardAllItems';

const CheckBox = () => {
    const [checked, setCheck] = useState(true);
    const handleCheck = e => {
        const result = e.target.value;
        const card = document.getElementsByClassName(`container-card ${result}`);
        setCheck(!checked)
        for(let i = 0; i < card.length; i++){
            if(checked){
                card[i].style.display = 'none';
            } else {
                card[i].style.display = 'block';
            }
        }
    }
    return (
    <>
        <Box sx={{padding: '1rem'}}>
            <FormGroup>
                <FormControlLabel
                    label='Todos los Productos'
                    control={<Checkbox 
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel
                    label='Bateas Ultrasonido'
                    control={<Checkbox 
                        value='Batea'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Diagnostico Directo'
                    control={<Checkbox 
                        value='Diagnostico Directo'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Electrónica / Portones automáticos'
                    control={<Checkbox 
                        value='Porton'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Escáneres'
                    control={<Checkbox 
                        value='Escaner'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Escáneres Profesionales AUTEL'
                    control={<Checkbox 
                        value='Escaner Profesional'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='GNC'
                    control={<Checkbox 
                        value='Gnc'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Proyectos Especiales'
                    control={<Checkbox 
                        value='Proyectos Especiales'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Tacómetro'
                    control={<Checkbox 
                        value='Tacometro'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Testers'
                    control={<Checkbox 
                        value='Testers'
                        onChange={(e) => handleCheck(e)}
                    />
                    }/>
            </FormGroup>
        </Box>
    </>
    )
}

export default CheckBox