<?php
    // lookupBanner.php
    $connect = mysqli_connect("localhost", "sjin9696", "1234", "sjin9696");
    $sql = "select * from b_table";
    $result = mysqli_query($connect, $sql);
    $arr = array();
    while($row = mysqli_fetch_array($result)){
        array_push($arr, $row);
    }
    echo json_encode($arr);
    mysqli_close($connect);
?>
