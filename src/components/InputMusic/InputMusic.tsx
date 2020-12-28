import { Container } from './styles';

export default function InputMusic(placeholder:string, type?:string){
    return(
        <Container placeholder={placeholder} type={type} />
    );
}