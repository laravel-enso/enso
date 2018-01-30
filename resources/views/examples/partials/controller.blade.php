<pre class="is-paddingless"
    v-hljs>
    <code class="php">
namespace App\Http\Controllers\Examples;

use App\Example;
use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Datatable;

class TableController extends Controller
{
    use Datatable;

    private const Template = __DIR__.'/exampleTable.json';

    public function query()
    {
        return Example::select(\DB::raw(
            'id as "dtRowId", name, position, seniority, project,
            salary, taxes, is_active, hired_at'
        ));
    }
}
    </code>
</pre>