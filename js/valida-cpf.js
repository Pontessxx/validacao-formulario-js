export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, '')
    console.log(cpf)
}