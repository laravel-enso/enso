<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Routing\Controller;
use LaravelEnso\Charts\app\Factories\Bar;
use LaravelEnso\Charts\app\Factories\Bubble;
use LaravelEnso\Charts\app\Factories\Doughnut;
use LaravelEnso\Charts\app\Factories\Line;
use LaravelEnso\Charts\app\Factories\Pie;
use LaravelEnso\Charts\app\Factories\Polar;
use LaravelEnso\Charts\app\Factories\Radar;

class ChartController extends Controller
{
    public function line()
    {
        return (new Line())
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
        return (new Bar())
            ->title('Sales')
            ->labels(['Ian', 'Feb', 'Mar'])
            ->datasets([
                'Sales' => [1233, 1231, 3123],
                'Spendings' => [1250, 1730, 5300],
                'Profit' => [1250 - 1233, 1730 - 1231, 5300 - 3123],
            ])->get();
    }

    public function pie()
    {
        return (new Pie())
            ->title('Colors')
            ->labels(['Green', 'Red', 'Azzure'])
            ->datasets([400, 50, 100])
            ->get();
    }

    public function doughnut()
    {
        return (new Doughnut())
            ->title('Colors Two')
            ->labels(['Green', 'Red', 'Azzure'])
            ->datasets([400, 50, 100])
            ->get();
    }

    public function radar()
    {
        return (new Radar())
            ->title('Habits')
            ->labels(['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'])
            ->datasets([
            '2005' => [65, 59, 90, 81, 56, 55, 40],
            '2006' => [28, 48, 40, 19, 96, 27, 100],
            ])->get();
    }

    public function polar()
    {
        return (new Polar())
            ->title('Again Colors')
            ->labels(['Green', 'Red', 'Azzure', 'Portocaliu', 'Purple'])
            ->datasets([11, 16, 7, 14, 14])
            ->get();
    }

    public function bubble()
    {
        return (new Bubble())
            ->title('City Population by Age')
            ->labels(['Geneva', 'Besel', 'Bucharest'])
            ->datasets([
                0 => [[1010, 59, 4800], [2011, 55, 1800], [1012, 45, 2000], [413, 58, 4400]],
                1 => [[2010, 48, 1700], [1211, 67, 1200], [2012, 96, 1233], [813, 35, 3000]],
                2 => [[1510, 44, 2000], [811, 62, 1500], [212, 55, 1299], [1213, 39, 4000]],
            ])->get();
    }
}
