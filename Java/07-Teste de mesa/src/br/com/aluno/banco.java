package br.com.aluno;
import java.util.Scanner;
public class banco {
    public static void main(String[]args) throws InterruptedException {
        Scanner entrada = new Scanner(System.in);
        char resposta = 's';
        while(resposta == 's'  ) {
            System.out.println("---- Bem vindo(a) ao banco Ye ----");
            System.out.println("=== Escolha um tipo de conta ===");
            System.out.println("== 1-Conta corrente ==");
            System.out.println("== 2-Conta poupança ==");
            System.out.println("== 3-Conta estudante ==");
            System.out.println("Digite aqui a sua escolha⬇⬇");



            int menu = entrada.nextInt();
            switch (menu) {
                case 1:
                    System.out.println("Você escolheu o tipo de conta 1");
                    System.out.println("Bem-vindo(a) ao banco Ye conta corrente");

                    break;

                case 2:
                    System.out.println("Você escolheu o tipo de conta 2");
                    System.out.println("Bem vindo(a) ao banco Ye conta poupança");

                    break;

                case 3:
                    System.out.println("Você escolheu o tipo de conta 3");
                    System.out.println("Bem vindo(a) ao banco Ye conta estudante");

                    break;

                default:
                    System.out.println("Selecione uma das opçôes listada acima");

            }
            System.out.println("Deseja refazer a operação?");
            System.out.println("sim ou não?");
            resposta = entrada.next().charAt(0);
            Thread.sleep(3000);
            if(resposta == 'n' ){
                System.out.println("---- OBRIGADO POR USAR A Ye BANK ----");
            }

        }
        entrada.close();
    }
}
