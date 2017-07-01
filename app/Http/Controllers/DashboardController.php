<?php

namespace App\Http\Controllers;

use LaravelEnso\Charts\app\Classes\BarChart;
use LaravelEnso\Charts\app\Classes\BubbleChart;
use LaravelEnso\Charts\app\Classes\LineChart;
use LaravelEnso\Charts\app\Classes\PieChart;
use LaravelEnso\Charts\app\Classes\RadarChart;

class DashboardController extends Controller
{
    public function index()
    {
        $preferences = json_encode(request()->user()->getPreferences()->local->dashboard);

        return view('dashboard.index', compact('preferences'));
    }

    public function getLineChartData()
    {
        $labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        $datasets = [

            'Sales'   => [65, 59, 80, 81, 56, 55, 40],
            'Revenue' => [15, 29, 60, 31, 26, 45, 44],
        ];

        $chart = new LineChart($labels, $datasets);

        return $chart->getResponse();
    }

    public function getBarChartData()
    {
        $labels = ['Ian', 'Feb', 'Mar'];

        $datasets = [

            'Vanzari'  => [1233, 1231, 3123],
            'Incasari' => [1250, 1730, 5300],
            'Profit'   => [1250 - 1233, 1730 - 1231, 5300 - 3123],
        ];

        $chart = new BarChart($labels, $datasets);

        return $chart->getResponse();
    }

    public function getPieChartData()
    {
        $labels = ['Green', 'Red', 'Azzure'];

        $datasets = [400, 50, 100];

        $chart = new PieChart($labels, $datasets);

        return $chart->getResponse();
    }

    public function getRadarChartData()
    {
        $labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

        $datasets = [

            '2005' => [65, 59, 90, 81, 56, 55, 40],
            '2006' => [28, 48, 40, 19, 96, 27, 100],
        ];

        $chart = new RadarChart($labels, $datasets);

        return $chart->getResponse();
    }

    public function getPolarChartData()
    {
        $labels = ['Green', 'Red', 'Azzure', 'Portocaliu', 'Bleu'];

        $datasets = [11, 16, 7, 14, 14];

        $chart = new PieChart($labels, $datasets);

        return $chart->getResponse();
    }

    public function getBubbleChartData()
    {
        $labels = [

            0 => 'Geneva',
            1 => 'Besel',
            2 => 'Bucharest',
        ];

        $datasets = [

            0 => [[2010, 59, 4800], [2011, 55, 1800], [2012, 45, 2000], [2013, 58, 4400], [2014, 42, 2900], [2015, 59, 2100]],
            1 => [[2010, 48, 1700], [2011, 67, 1200], [2012, 96, 1233], [2013, 35, 3000], [2014, 45, 2000], [2015, 52, 3300]],
            2 => [[2010, 44, 2000], [2011, 62, 1500], [2012, 55, 1299], [2013, 39, 4000], [2014, 36, 1000], [2015, 45, 1750]],
        ];

        $chart = new BubbleChart($labels, $datasets);

        return $chart->getResponse();
    }
}
