<?php

namespace App\Http\Controllers;

use LaravelEnso\Charts\app\Classes\BarChart;
use LaravelEnso\Charts\app\Classes\PieChart;
use LaravelEnso\Charts\app\Classes\LineChart;
use LaravelEnso\Charts\app\Classes\PolarChart;
use LaravelEnso\Charts\app\Classes\RadarChart;
use LaravelEnso\Charts\app\Classes\BubbleChart;
use LaravelEnso\Charts\app\Classes\DoughnutChart;

class ChartController extends Controller
{
    public function line()
    {
        return (new LineChart())
            ->title('Income')
            ->labels(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
            ->datasets([
                'Sales' => [65, 59, 80, 81, 26, 25, 10],
                'Revenue' => [15, 29, 60, 31, 56, 65, 44],
            ])->fill()
            ->get();
    }

    public function bar()
    {
        return (new BarChart())
            ->title('Sales')
            ->labels(['Ian', 'Feb', 'Mar'])
            ->datasets([
                'Vanzari' => [1233, 1231, 3123],
                'Incasari' => [1250, 1730, 5300],
                'Profit' => [1250 - 1233, 1730 - 1231, 5300 - 3123],
            ])->get();
    }

    public function pie()
    {
        return (new PieChart())
            ->title('Pie Chart')
            ->labels(['Green', 'Red', 'Azzure'])
            ->datasets([400, 50, 100])
            ->get();
    }

    public function doughnut()
    {
        return (new DoughnutChart())
            ->title('Doughnut Chart')
            ->labels(['Green', 'Red', 'Azzure'])
            ->datasets([400, 50, 100])
            ->get();
    }

    public function radar()
    {
        return (new RadarChart())
            ->title('Radar Chart')
            ->labels(['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'])
            ->datasets([
            '2005' => [65, 59, 90, 81, 56, 55, 40],
            '2006' => [28, 48, 40, 19, 96, 27, 100],
            ])->get();
    }

    public function polar()
    {
        return (new PolarChart())
            ->title('Polar Chart')
            ->labels(['Green', 'Red', 'Azzure', 'Portocaliu', 'Bleu'])
            ->datasets([11, 16, 7, 14, 14])
            ->get();
    }

    public function bubble()
    {
        return (new BubbleChart())
            ->title('Bubble Chart')
            ->labels(['Geneva', 'Besel', 'Bucharest'])
            ->datasets([
                0 => [[1010, 59, 4800], [2011, 55, 1800], [1012, 45, 2000], [413, 58, 4400]],
                1 => [[2010, 48, 1700], [1211, 67, 1200], [2012, 96, 1233], [813, 35, 3000]],
                2 => [[1510, 44, 2000], [811, 62, 1500], [212, 55, 1299], [1213, 39, 4000]],
            ])->get();
    }
}
