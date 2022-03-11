<?php

use LaravelEnso\Avatars\Models\Avatar;
use LaravelEnso\DataExport\Models\Export;
use LaravelEnso\DataImport\Models\Import;
use LaravelEnso\DataImport\Models\RejectedImport;
use LaravelEnso\Documents\Models\Document;
use LaravelEnso\Files\Models\Upload;
use LaravelEnso\HowTo\Models\Poster;
use LaravelEnso\HowTo\Models\Video;
use LaravelEnso\Products\Models\Picture;
use LaravelEnso\Webshop\Models\Brand;
use LaravelEnso\Webshop\Models\CarouselSlide;

return [
    'linkExpiration' => (int) env('TEMPORARY_LINK_EXPIRATION', 60 * 60 * 24),
    'storageLimit' => 500000,
    'paginate' => (int) env('FILES_PAGINATION', 50),
    'testingFolder' => 'testing',
    'renameFolders' => [
        'dataImport' => 'import',
        'dataExport' => 'export',
        'webshopCarouselSlide' => 'carouselSlide',
    ],
    'nonStandardFolders' => [
        'files', 'imports', 'carousel', 'howToVideos', 'webshopCarouselSlide',
    ],
    'upgrade' => [
        'avatar' => Avatar::class,
        'dataExport' => Export::class,
        'upload' => Upload::class,
        'dataImport' => Import::class,
        'rejectedImport' => RejectedImport::class,
        'document' => Document::class,
        'productPicture' => Picture::class,
        'webshopBrand' => Brand::class,
        'webshopCarouselSlide' => CarouselSlide::class,
        'poster' => Poster::class,
        'video' => Video::class,
    ],
];
