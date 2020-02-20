<?php
	//insertData.php
	$connect = mysqli_connect("localhost", "sjin9696", "1234", "sjin9696");
	//담기
		$item_name =$_POST['item_name'];
		$item_desc = $_POST['item_desc'];
		$item_price = $_POST['item_price'];
		$item_event = $_POST['item_event'];
		$item_dc = $_POST['item_dc'];
		$item_new = $_POST['item_new'];
		$item_pop = $_POST['item_pop'];
		$item_recommand = $_POST['item_recommand'];
		$item_img = $_POST['item_img'];
	$sql = "insert into item_table(
					item_name,
					item_desc,
					item_price,
					item_event,
					item_dc,
					item_new,
					item_pop,
					item_recommand,
					item_img
			) values(
					'$item_name',
					'$item_desc',
					'$item_price',
					'$item_event',
					'$item_dc',
					'$item_new',
					'$item_pop',
					'$item_recommand',
					'$item_img'
			)";
    $result = mysqli_query($connect, $sql);
//    $arr = array();
//    while($row = mysqli_fetch_array($result)){
//        array_push($arr, $row);
//    }
//    echo json_encode($arr);
    mysqli_close($connect);
?>

