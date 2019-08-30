

<?php

$db = new mysqli('127.0.0.1', 'faishal', '12345', 'faishal');

if ($db->connect_errno) {
    echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
}

$sqlquery = 'select * from kontak';
$result = $db->query($sqlquery);

?>

<form>
<table border="1px">
    <tr>
        <th>No.</th>
        <th>Nama</th>
        <th>Email</th>
    </tr>
    <?php
        $no = 1;
        while($row = $result->fetch_array(1)) {
    <tr>
        echo "<td>$no</td>";
        echo "<td>$row[nama]</td>";
        echo "<td>$row[email]</td>";
    </tr>
    $no++; } ?>
</table>
</form>

<form>
<table>
    <tr>
        <th>
            <input type="text" placeholder="nama">
        </th>
        <th>
            <input type="text" placeholder="email">
        </th>
    </tr>
    <tr>
        <td>
            <button>Submit</button>
        </td>
        <td>
            <button>Reset</button>
        </td>
    </tr>
</table>
</form>
