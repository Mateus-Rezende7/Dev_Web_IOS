import java.util.Scanner;

public class Pontos {
    public static void main (String [] args){
        Scanner entrada = new Scanner(System.in);
        int pontos = 0;
        System.out.println("Digite o numero de pontos do jogador:");
        pontos = entrada.nextInt();

        if (pontos >= 1000){
            System.out.println("Você passou para a fase 2!");
        }
        System.out.println("Proxima instrução");
        entrada.close();
    }

}
