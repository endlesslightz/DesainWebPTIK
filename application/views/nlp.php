 <?php
$this->load->view('/template/header');
?>


	<section id="home">
			<div class="container">
				<div class="home_wrap center">
					<h1>Masukkan kalimat Anda:</h1>
					<form action="<?php echo site_url();?>scanner#hasil" method="post">
						<input type="text" name="kalimat" value="" />	
						<div class="submit_wrap"><input type="submit" value="Olah Kalimat" /></div>
						<div class="clear"></div>
					</form>
				</div>
			</div>
		</section>
		
		<section id="hasil">
			<div class="container">
                            <br><br>
                            <center><h1>Hasil Scanning</h1></center>
                           <?php
                            if($flag == 0){ 
                                echo "<center><p>Belum ada kalimat yang diinputkan</p></center>";
                            } 
                            
                            else if ($flag == 1){
                               echo "<center><p>Kata di dalam kalimat tidak ada kecocokan sama sekali dengan daftar token</p></center>";
                             }
            
                            else if ($flag == 2){  
                                echo "<center><a><b>Kalimat : </b></a>".$kalimat."</center>";
                             ?>
                                <br>
                               <center><table>
                                   <tr><th>Daftar kata</th><th>Status</th></tr>
                            <?php       
                               foreach($kata as $listkata)
                                    { 
                                        foreach ($token as $listtoken) {
                                            if ($listkata==$listtoken)
                                            $status=1;
                                        }
                                        if ($status == 1) {
                                        echo " <tr><td>".$listkata."</td><td><a style='color:green;'>Kata ada di dalam token</a></td></tr>"; }
                                        else {
                                        echo " <tr><td>".$listkata."</td><td><a style='color:red;'>Kata tidak ada di dalam daftar token</a></td></tr>"; }
                                        $status=0;
                                    }                           
                            }
                            ?>
                                   </table></center>
                         <hr>
                         <center><h1>Hasil Parsing</h1></center>
			</div>
		</section>
		


		<section id="about">	
                    <div class="testimonials_wrap">
                        <div class="container">
                            <center><h1 style="color:white">ANGGOTA TIM</h1></center>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 padbot30">
                                    <div class="testim_item">
                                            <a class="testim_author" href="javascript:void(0);"><img src="<?php echo base_url();?>assets/images/Kifni.jpg" alt="" /></a>
                                            <h4 class="testim_name">Kifni Taufik D.</h4>
                                            <p>NIM : 15/388492/PPA/04931</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 padbot30">
                                        <div class="testim_item">
                                                <a class="testim_author" href="javascript:void(0);"><img src="<?php echo base_url();?>assets/images/Nurcahya.jpg" alt="" /></a>
                                                <h4 class="testim_name">Nurcahya Pradana T.P.</h4>
                                                <p>NIM : 15/388492/PPA/04931</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
		</section>
<?php
$this->load->view('template/footer');
?>