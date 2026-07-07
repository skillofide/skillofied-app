import os
import re

COURSE_DIR = '/Users/inforbell/skillofied/skillofied-app/src/components/courses/modules/FrontendCourse'

for i in range(1, 18):
    filepath = os.path.join(COURSE_DIR, f'Module{i}.tsx')
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()

    if '<pre className={styles.codeBlock}><code>' not in content:
        continue
        
    # Determine language
    lang = 'HTML'
    if 5 <= i <= 8:
        lang = 'CSS'
    elif 9 <= i <= 16:
        lang = 'JavaScript'
    elif i == 17:
        lang = 'Bash'

    # Add import if missing
    if 'import CodeSnippet' not in content:
        content = content.replace("import styles from '../../FrontendCoursePage.module.css';", 
                                  "import styles from '../../FrontendCoursePage.module.css';\nimport CodeSnippet from '../../../common/CodeSnippet';")

    # Replace <pre className={styles.codeBlock}><code>{`...`}</code></pre>
    # Note: Using regex to capture the inner content
    
    pattern = r'<pre className=\{styles\.codeBlock\}><code>\{\`(.*?)\`\}<\/code><\/pre>'
    
    def replacer(match):
        code_content = match.group(1)
        # Using isRunnable={true} for all.
        return f'<CodeSnippet isRunnable={{true}} language="{lang}" code={{`{code_content}`}} />'
        
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    # Also handle the cases where there is no backtick: <pre ...><code>npm run build</code></pre>
    pattern2 = r'<pre className=\{styles\.codeBlock\}>(.*?)<\/pre>'
    
    def replacer2(match):
        code_content = match.group(1)
        # If it contains <code> already
        if code_content.startswith('<code>') and code_content.endswith('</code>'):
            code_content = code_content[6:-7]
        if '{`' in code_content:
            return match.group(0) # Already handled
        
        return f'<CodeSnippet isRunnable={{true}} language="{lang}" code={{`{code_content}`}} />'
        
    new_content = re.sub(pattern2, replacer2, new_content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)
        
    print(f'Refactored {filepath}')
