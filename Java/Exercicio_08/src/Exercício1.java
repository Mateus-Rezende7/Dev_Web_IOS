import java.util.Scanner;

public class   Exercício1 {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        int maior,menor,media = 0;
        int[] numeros = new int[5];

        // comprimento do vetor
        int notas = numeros.length;

        for (int i = 0; i < notas; i++) {
            System.out.println("Digite suas notas:");
            numeros[i] = entrada.nextInt();
        }

        maior = numeros[0];
        // encontra o maior número
        for (int i = 0; i < notas; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }

        menor = numeros[0];
        // menor valor
        for(int i = 0; i < notas; i++){
            if(numeros[i] < menor){
                menor = numeros[i];
            }
        }

        for(int i = 0; i < notas; i++){
    media += numeros[i];
}

        System.out.println("A sua maior nota foi : " + maior);
        System.out.println("A sua menor nota foi :" + menor);
        System.out.println("A sua media foi :" + media / notas);
        entrada.close();
    }
}