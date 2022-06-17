import time
import serial


ser = serial.Serial("/dev/ttyACM0", baudrate=115200) #Modificar el puerto serie de ser necesario

try:
    while True:
        read = ser.readline()
        print(read)

#except KeyboardInterrupt:
 #   print("\nInterrupcion por teclado")
except ValueError as ve:
    print(ve)
    print("Otra interrupcion")
finally:
    ser.close()