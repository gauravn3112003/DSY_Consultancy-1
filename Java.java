import java.net.InetAddress;
import java.net.UnknownHostException;

public abstract class Java {
    public static void main(String[] args) throws UnknownHostException {
        InetAddress ip = InetAddress.getByName("www.google.com");
        System.out.println(ip);

    }
}
