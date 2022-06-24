import  {Typography} from "@mui/material";
//Se redirecciona a este componente cuando la direccion no existe
const ErrorPage = () => {
    return (
        <>
            <Typography variant="h2">Upsss!</Typography>
            <Typography variant="h4">Acá no hay nada...</Typography>
        </>
    )
}
export default ErrorPage;