<?php
// Retrieve the raw POST data
$data = file_get_contents("php://input");

// Decode the JSON data into a PHP array
$formData = json_decode($data, true);

// Extract personalInfo, academicPerformance, and programs from formData
$personalInfo = $formData['personalInfo'];
$academicPerformance = $formData['academicPerformance'];
$programs = $formData['programs'];

// Your database connection code
$servername = "localhost";
$username = "root";
$password = "my@password";
$dbname = "all_forms_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into database
$sql = "INSERT INTO form_c1 (studentName, email, rollNumber, branch, department, cgpa, backlogDetails, programs)
        VALUES ('{$personalInfo['studentName']}', '{$personalInfo['email']}', '{$personalInfo['rollNumber']}', '{$personalInfo['branch']}', '{$personalInfo['department']}', '{$academicPerformance['cgpa']}', '{$academicPerformance['backlogDetails']}', '" . implode(",", $programs) . "')";

if ($conn->query($sql) === TRUE) {
    echo "Form data saved successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
