<?php
$host = 'localhost'; // хост
$db = 'alla_post'; // имя базы данных
$user = 'Alla_Post'; // имя пользователя
$pass = 'Abramova_76'; // пароль

try {
    // Подключение к базе данных
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Проверка, что данные формы отправлены
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Получение данных из формы
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Хеширование пароля
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        // SQL-запрос для вставки данных в таблицу с использованием подготовленных выражений
        $sql = "INSERT INTO contacts (email, password) VALUES (:email, :password)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);

        if ($stmt->execute()) {
            echo "Заявка успешно отправлена!";
        } else {
            echo "Ошибка при отправке заявки.";
        }
    }

} catch (PDOException $e) {
    echo "Ошибка подключения: " . $e->getMessage();
}
?>