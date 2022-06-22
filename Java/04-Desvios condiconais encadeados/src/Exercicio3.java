import java.util.Scanner;

public class Exercicio3 {
    public static void main(String[] args) {
        System.out.println("====Dias da semana====");
        Scanner entrada = new Scanner(System.in);
        System.out.println("1 - Domingo");
        System.out.println("2 - Segunda-feira");
        System.out.println("3 - Terça-feira");
        System.out.println("4 - Quarta-feira");
        System.out.println("5 - Quinta-feira");
        System.out.println("6 - Sexta-feira");
        System.out.println("7 - Sábado");
        System.out.println("Digite abaixo o dia que você escolheu ");
        String num = entrada.next();

        switch (num) {
            case "1":
                System.out.println("Você escolheu domingo");
                break;

            case "2":
                System.out.println("Você escolheu a Segunda-feira");
                break;

            case "3":
                System.out.println("Você escolheu a Terça-feira");
                break;

            case "4":
                System.out.println("Você escolheu a Quarta-feira");
                break;

            case"5":
                System.out.println("Você escolheu a Quinta-feira");
                break;
            case"6":
                System.out.println("Você escolher o Sàbado");
                break;
            default:
                System.out.println("Escolha um dia e digite seu respectivo numero");

        }
        entrada.close();

    }
}
