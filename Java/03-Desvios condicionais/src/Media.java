import java.util.Scanner;
public class Media {
    public static void main (String[]args){
        Scanner entrada = new Scanner(System.in);
        String aluno;
        int nota1, nota2, media;
        System.out.println("Escreva seu nome");
        aluno = entrada.nextLine();

        System.out.println("Digite duas notas");
        nota1 = entrada.nextInt();
        nota2 = entrada.nextInt();

        media = (nota1 + nota2)/2;

        System.out.println(aluno + "Sua média é:" + media);
        entrada.close();


    }
}

