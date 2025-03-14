import sys
from PyQt6.QtWidgets import QApplication, QMainWindow

# Import the generated UI class
from ui_mainwindow import Ui_MainWindow

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        
        # Set up the user interface from the generated class
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
