<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Scanner extends CI_Controller {
        
        function __construct()
	{
		parent::__construct();
		$this->load->library('form_validation');
		$this->load->helper('text');
		$this->load->helper('url');
		$this->load->model('');
	}
        
	/**
	* Nlp.php
	* Diinginkan sistem pengolah bahasa alami untuk keperluan melayani pencarian buku/jurnal/prosiding di perpustakaan
    * a. Buatlah production rules untuk keperluan diatas, tanpa membatasi nama buku/jurnal/prosiding yang dicari
	* b. Jika pola kalimat yang diujudkan sebagai production rules sudah anda tentukan. Rancanglah bagaimana anda menyimpan pola2 kalimat tersebut.
    * c. Buatlah program scanner untuk mengetes kalimat input apakah sesuai dengan kosakata tersimpan
	* d. Buatlah program parser untuk mengetes struktur kalimat input apakah sesuai dengan pola kalimat yang tersimpan
	*
	*/
        

	public function index()
	{
		$kalimat = (string)$_POST['kalimat'];              
                $tahap_1 = strtolower($kalimat);               
                $tahap_2 = preg_replace("/[^ \w]+/","",$tahap_1);                                
                $tahap_3 = (explode(" ",$tahap_2));
                foreach ($tahap_3 as $token){
                    $filetoken = file("C://xampp5.5/htdocs/ai-nlp/assets/token.txt");
                    foreach($filetoken as $daftar)
                    {
                      if(strpos($daftar, $token) !== false){
                       // echo $token." ada dalam daftar token";
                       // echo "<br>";
                        $data['token'][]= $token;
                      }
                    }
                } 
             //  print_r ($data['token']);
            $data['kata']=$tahap_3;
            if (empty($data['token'])){
                $data['flag']=1;
            }
            else {
                $data['flag']=2;   
            }
            $data['kalimat']=$_POST['kalimat'];
            $this->load->view('nlp',$data);
	}
}
