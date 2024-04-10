import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const CopyableTextField = (text: string | undefined, label: string) => {
    const value = text;
  
    // Fonction pour copier le texte
    const copyToClipboard = async (text: string | undefined) => {
      if (navigator.clipboard) { // Vérifie si l'API du presse-papiers est disponible
        try {
            if(text){
                await navigator.clipboard.writeText(text);
                alert("Texte copié dans le presse-papiers !");
            }
        } catch (error) {
          console.error('Erreur lors de la copie du texte :', error);
        }
      } else {
        if(text){
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert("Texte copié dans le presse-papiers (méthode alternative) !");
        }
        
      }
    };
  
    return (
      <Box
        marginTop={2}
        display="inline-block"
        onClick={() => copyToClipboard(value)} 
        sx={{
          cursor: 'pointer',
          '&:hover': {
            '.MuiInputBase-input': {
                cursor: 'pointer', 
              },
          },
        }}
      >
        <TextField
          fullWidth
          label={label}
          value={value}
          InputProps={{
            readOnly: true,
            style: { color: 'gray', cursor: 'pointer' }
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    );
  };
  

export default CopyableTextField;