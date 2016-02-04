<?php
if (isset($_POST['search'])) {
$search = htmlentities($_POST['search']);
} else $search ='';
$db = mysql_connect('http://pestcontrol.local/','root',''); 
mysql_select_db('wp', $db); //theses parameters
$sql = "SELECT post_title from wp_posts WHERE post_content LIKE '%$search%' OR post_title LIKE '%$search%'";
$req = mysql_query($sql) or die();
echo '<ul class="mypages">';
while ($data = mysql_fetch_array($req))
{
echo '<li ><a href="#" onclick="selected(this.innerHTML);">'.htmlentities($data['post_title']).'</a></li>';
}
echo '</ul>';
mysql_close();
?>
