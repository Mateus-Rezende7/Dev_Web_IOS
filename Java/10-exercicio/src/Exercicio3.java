import java.util.Random;

public class Exercicio3 {
    public static void main(String[] args) {

        int[][] numeros = new int[100][100];
        Random number = new Random();

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                numeros[i][j] = number.nextInt(100 + 1);
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");
        }
        System.out.println("Nova matriz");
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                if (numeros[i][j] % 2 == 0) {
                    numeros[i][j] = 1;
                } else {
                    numeros[i][j] = -1;
                }
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");
        }
    }
}