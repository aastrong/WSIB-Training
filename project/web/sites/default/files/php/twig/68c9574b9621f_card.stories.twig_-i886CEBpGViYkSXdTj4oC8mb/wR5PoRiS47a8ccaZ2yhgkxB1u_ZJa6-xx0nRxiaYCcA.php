<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* themes/custom/wsib/components/molecule/card/card.stories.twig */
class __TwigTemplate_5cd06d84c49ca9280726769eb2400256 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->extensions[SandboxExtension::class];
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 1
        $_selected_story = $context['_story'] ?? NULL;        ;
        $_stories_meta = ["title" => "Components/Molecule/Card"]        ;
$context = twig_array_merge($_stories_meta['parameters']['server']['params'] ?? [], twig_array_merge($_stories_meta['args'] ?? [], $context));        
        if ($_selected_story === FALSE) {$extension = $this->extensions["TwigStorybook\\Twig\\TwigExtension"            ];
$extension->storyCollector->setWrapperData("card", "themes/custom/wsib/components/molecule/card/card.stories.twig",             $_stories_meta);
        }        // line 2
        yield "
  ";
        // line 3
        $_selected_story = $context['_story'] ?? NULL;        ;
        if ($_selected_story === "default"        ) {            $_story_meta = ["name" => "1. Default", "args" => ["card_title" => "I am a header!", "card_body" => "I am some body text to go into our card body in our stories. This gets restricted to 4 lines of text.", "card_image" => "https://picsum:photos/seed/affse3/1200/150", "card_prep_time" => "30+ min", "card_total_time" => "3h 45min", "card_link" => "https://www.example.org", "card_link_text" => "Link to my article"]]            ;
$context = twig_array_merge($_story_meta['parameters']['server']['params'] ?? [], twig_array_merge($_story_meta['args'] ?? [], $context));            
            // line 14
            yield "      
    ";
            // line 15
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(Twig\Extension\CoreExtension::include($this->env, $context, "wsib:card", ["card_title" => "I am a header", "card_body" => "I am some body text to go into our card body in our stories. This gets restricted to 4 lines of text.", "card_image" => "https://picsum:photos/seed/affse3/1200/150", "card_prep_time" => "30+ min", "card_total_time" => "3h 45min", "card_link" => "https://www.example.org", "card_link_text" => "Link to my article"]));
            // line 21
            yield "
  ";
            ;            
        }        // line 3
        if ($_selected_story === FALSE) {            $_story_meta = ["name" => "1. Default", "args" => ["card_title" => "I am a header!", "card_body" => "I am some body text to go into our card body in our stories. This gets restricted to 4 lines of text.", "card_image" => "https://picsum:photos/seed/affse3/1200/150", "card_prep_time" => "30+ min", "card_total_time" => "3h 45min", "card_link" => "https://www.example.org", "card_link_text" => "Link to my article"]]            ;
$extension = $this->extensions["TwigStorybook\\Twig\\TwigExtension"            ];            
$extension->storyCollector->collect("default", "themes/custom/wsib/components/molecule/card/card.stories.twig",             $_story_meta);
        }        // line 23
        yield "
";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "themes/custom/wsib/components/molecule/card/card.stories.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  70 => 23,  66 => 3,  62 => 21,  60 => 15,  57 => 14,  53 => 3,  50 => 2,  44 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "themes/custom/wsib/components/molecule/card/card.stories.twig", "/var/www/html/web/themes/custom/wsib/components/molecule/card/card.stories.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["stories" => 1, "story" => 3];
        static $filters = [];
        static $functions = ["include" => 15];

        try {
            $this->sandbox->checkSecurity(
                ['stories', 'story'],
                [],
                ['include'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
