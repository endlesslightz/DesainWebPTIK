<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Nlp extends CI_Controller {
        
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
        

	/*Definisi pola*/
	private static $pola = array(
		'Cari makan lagi',
		'Cari pacar lagi'
	);

	/*Definisi kosa kata*/
	private static $kosakata = array(
		'index' => 'data'
	);


	public function index()
	{
		//$input = "Cari buku karangan Saridi";
		//print_r($this->_parser($input));
                $data['flag']=0;
                $this->load->view('nlp',$data);
	}


	/*
	* Parser
	* Fungsi untuk mengetes kalimat input apakah sesuai dengan kosakata tersimpan
	*/
	function _parser($input)
	{

		return $input;
	}

	/*
	* Scanner
	* Fungsi untuk mengetes struktur kalimat input apakah sesuai dengan pola kalimat yang tersimpan
	*/
	function _scanner($input)
	{

		return $input;
	} 
}
